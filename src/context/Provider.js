import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import starWarsContext from './index';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const fetchApi = await fetch(URL);
      const planetsData = await fetchApi.json();
      setData(planetsData.results);
    }
    fetchData();
  }, []);

  const contextStar = {
    data,
  };

  return (
    <starWarsContext.Provider value={ contextStar }>
      {children}
    </starWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
}.isRequired;

export default Provider;
