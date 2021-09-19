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
  });
  // APENAS PARA O LINT
  console.log(backup);

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

  // Filters everytime the filter is modified
  useEffect(() => {
    function filterPlanets(searchText, filterByNumericValues) {
      // Filters by name
      filteredPlanets.current = [...data]
        .filter((planet) => planet.name.toLowerCase().includes(searchText.toLowerCase()));
      // Apply every filter
      [...filterByNumericValues].forEach((filter) => {
        switch (filter.comparison) {
        case 'maior que': {
          const biggerThan = [...filteredPlanets.current]
            .filter((item) => Number(item[filter.column])
            > Number(filter.value));
          filteredPlanets.current = biggerThan;
          break;
        }
        case 'menor que': {
          const lesserThan = [...filteredPlanets.current]
            .filter((item) => Number(item[filter.column])
            < Number(filter.value));
          filteredPlanets.current = lesserThan;
          break;
        }
        case 'igual a': {
          const equalsTo = [...filteredPlanets.current]
            .filter((item) => Number(item[filter.column])
            === Number(filter.value));
          filteredPlanets.current = equalsTo;
          break;
        }
        default:
          break;
        }
      });
    }
    if (!firstRender.current) {
      const { filterByName: { name }, filterByNumericValues } = filters;
      filterPlanets(name, filterByNumericValues);
      setBackup(filteredPlanets.current);
    } else {
      firstRender.current = false;
    }
  }, [filters, data, filteredPlanets]);

  const value = { data, filteredPlanets, loading, filters, setFilters };
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
