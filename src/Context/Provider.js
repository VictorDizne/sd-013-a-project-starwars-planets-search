import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import starWarsContext from '.';

function Provider({ children }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const APIdata = await response.json();
      setData(APIdata.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const value = { data, loading };
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
