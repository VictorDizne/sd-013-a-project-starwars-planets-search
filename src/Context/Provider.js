import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import SwapiContext from './SwapiContext';

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

  // This is the useEffect responsible for fatcing the API and than seting the loading state to false.
  useEffect(() => {
    const fetchApi = async () => {
      const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const response = await request.json();
      const { results } = response;
      const filteredData = results.filter((planet) => delete planet.residents);
      setData(filteredData);
      setBackup(filteredData);
      setLoading(false);
    };
    fetchApi();
  }, [filters]);

  // This useEffect is responsible for making the application's filters work and changing the state accordingly to the user's input.
  useEffect(() => {
    function planetsFilter(searchText, filter) {
      const filteredData = [...data]
        .filter((planet) => planet.name.toLowerCase().includes(searchText.toLowerCase()));
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
      setBackup(planetsFilter(name, filterByNumericValues));
    } else {
      firstRender.current = false;
    }
  }, [data, filters]);

  const value = { data, backup, loading, filters, setFilters, setBackup };
  return (
    <SwapiContext.Provider value={ value }>
      { children }
    </SwapiContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
