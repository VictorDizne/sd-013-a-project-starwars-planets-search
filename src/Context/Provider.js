import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import starWarsContext from '.';

function Provider({ children }) {
  const firstRender = useRef(true);
  const [data, setData] = useState({});
  const [backup, setBackup] = useState({});
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: {
      column: 'rotation_period',
      comparison: 'maior que',
      value: '0',
    },
  });

  // Fetches the data from the API and sets Loading to false
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const APIdata = await response.json();
      setData(APIdata.results);
      setBackup(APIdata.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  // Filters everytime the filter is modified
  useEffect(() => {
    function filterPlanets(searchText, filter) {
      const filteredData = [...data]
        .filter((planet) => planet.name.toLowerCase().includes(searchText.toLowerCase()));
      console.log(filteredData);
      switch (filter.comparison) {
      case 'maior que': {
        const biggerThan = filteredData
          .filter((item) => Number(item[filter.column])
          > Number(filter.value));
        return biggerThan;
      }
      case 'menor que': {
        const lesserThan = filteredData
          .filter((item) => Number(item[filter.column])
          < Number(filter.value));
        return lesserThan;
      }
      default: {
        const equalsTo = filteredData
          .filter((item) => Number(item[filter.column])
          === Number(filter.value));
        return equalsTo;
      }
      }
    }
    if (!firstRender.current) {
      const { filterByName: { name }, filterByNumericValues } = filters;
      setBackup(filterPlanets(name, filterByNumericValues));
    } else {
      firstRender.current = false;
    }
  }, [filters, data]);

  const value = { data, backup, loading, filters, setFilters, setBackup };
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
