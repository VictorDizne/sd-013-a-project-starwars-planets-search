import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import tableContext from './tableContext';

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
        age: 10,
      },
    },
  });

  const handleFilterByName = (newName) => {
    const { filters: { filterByName } } = filter;
    setFilter({
      ...filter, filters: { filterByName: { ...filterByName, name: newName } } });
  };

  useEffect(() => {
    const fetchPlanets = async () => {
      setLoading(true);
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const results = await (await fetch(url)).json();
      setLoading(false);
      setData(results);
    };

    fetchPlanets();
  }, []);

  return (
    <tableContext.Provider value={ { data, loading, handleFilterByName, filter } }>
      {children}
    </tableContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
