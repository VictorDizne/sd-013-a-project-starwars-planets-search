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
    <tableContext.Provider value={ { data, loading } }>
      {children}
    </tableContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
