import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import starWarsContext from '.';

function Provider({ children }) {
  const firstRender = useRef(true);
  const filteredPlanets = useRef([]);
  const [data, setData] = useState({});
  const [backup, setBackup] = useState({});
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'rotation_period',
        comparison: 'maior que',
        value: '0',
      }],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  // Fetches the data from the API and sets Loading to false
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const APIdata = await response.json();
      setData(APIdata.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  // This is needed because we must order string, not just numbers
  function compare(a, b, column) {
    const oneNegative = -1;
    // This checks if we are going to order the names, if we are, then we need to return a value
    // to the sort function
    if (column === 'name') {
      if (a[column] < b[column]) {
        return oneNegative;
      }
      if (a[column] > b[column]) {
        return 1;
      }
      return 0;
    }
    // If we are sorting numbers, then we can just subtract eachother
    return a[column] - b[column];
  }

  // Filters everytime the filter is modified
  useEffect(() => {
    function filterPlanets(searchText, filterByNumericValues, order) {
      // Filters by name. We set both the searchword as the planet names to lowercase
      // so the filter won't be case sensitive
      filteredPlanets.current = [...data]
        .filter((planet) => planet.name.toLowerCase().includes(searchText.toLowerCase()));
      // Applies every filter
      [...filterByNumericValues].forEach((filter) => {
        const { comparison, column, value } = filter;
        switch (comparison) {
        case 'maior que': {
          const biggerThan = [...filteredPlanets.current]
            .filter((item) => Number(item[column])
            > Number(value));
          filteredPlanets.current = biggerThan;
          break;
        }
        case 'menor que': {
          const lesserThan = [...filteredPlanets.current]
            .filter((item) => Number(item[column])
            < Number(value));
          filteredPlanets.current = lesserThan;
          break;
        }
        case 'igual a': {
          const equalsTo = [...filteredPlanets.current]
            .filter((item) => Number(item[column])
            === Number(value));
          filteredPlanets.current = equalsTo;
          break;
        }
        default:
          break;
        }
      });
      const { column, sort } = order;
      if (sort === 'ASC') {
        const sorted = [...filteredPlanets.current].sort((a, b) => compare(a, b, column));
        filteredPlanets.current = sorted;
      } else {
        const sorted = [...filteredPlanets.current].sort((a, b) => compare(b, a, column));
        filteredPlanets.current = sorted;
      }
    }
    if (!firstRender.current) {
      const { filterByName: { name }, filterByNumericValues, order } = filters;
      filterPlanets(name, filterByNumericValues, order);
      setBackup(filteredPlanets.current);
    } else {
      firstRender.current = false;
    }
  }, [filters, data]);

  const value = { data, backup, loading, filters, setFilters };
  return (
    <starWarsContext.Provider value={ value }>
      { children }
    </starWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
