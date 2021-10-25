import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import SwapiContext from './SwapiContext';

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
    filterByNumericValues: [{
      column: 'rotation_period',
      comparison: 'maior que',
      value: '0',
    }],
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
    function planetsFilter(searchText, filterByNumericValues) {
      filteredPlanets.current = [...data]
        .filter((planet) => planet.name.toLowerCase().includes(searchText.toLowerCase()));
      [...filterByNumericValues].forEach((filter) => {
        switch (filter.comparison) {
        case 'maior que': {
          const biggerThan = filteredPlanets.current
            .filter((item) => Number(item[filter.column])
            > Number(filter.value));
          filteredPlanets.current = biggerThan;
          break;
        }
        case 'menor que': {
          const lesserThan = filteredPlanets.current
            .filter((item) => Number(item[filter.column])
            < Number(filter.value));
          filteredPlanets.current = lesserThan;
          break;
        }
        case 'igual a': {
          const equalsTo = filteredPlanets.current
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
      planetsFilter(name, filterByNumericValues);
      setBackup(filteredPlanets.current);
    } else {
      firstRender.current = false;
    }
  }, [filters, data]);
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
