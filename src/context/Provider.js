import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import tableContext from './TableContext';

function Provider({ children }) {
  const [data, setData] = useState({
    count: 0,
    next: '',
    previous: null,
    results: [],
  });

  const [loading, setLoading] = useState(true);

  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column: 'population',
          comparison: 'maior que',
          value: '100000',
        },
      ],
    },
  });

  const handleFilterByName = (newName) => {
    const { filters: { filterByName, filterByNumericValues } } = filter;
    setFilter({
      ...filter,
      filters:
      { filterByName:
        { ...filterByName, name: newName },
      filterByNumericValues: [...filterByNumericValues] } });
  };

  const handleFilterByNumericValues = (column, comparison, value) => {
    const { filters: { filterByName, filterByNumericValues } } = filter;
    setFilter({
      ...filter,
      filters:
      { filterByName:
        { ...filterByName },
      filterByNumericValues:
      [{ column, comparison, value }] } });
    // [...filterByNumericValues, { column, comparison, value }] } });
  };

  useEffect(() => {
    const fetchPlanets = async () => {
      setLoading(true);
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await (await fetch(url)).json();
      response.results.forEach((planet) => {
        delete planet.residents;
      });
      setLoading(false);
      setData({ ...response, results: response.results });
    };

    fetchPlanets();
  }, []);

  const context = {
    data, loading, handleFilterByName, filter, handleFilterByNumericValues };

  return (
    <tableContext.Provider value={ context }>
      {children}
    </tableContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
