import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import MyContext from './MyContext';
import fetchAPI from '../serviceAPI/index';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [dataKey, setDataKey] = useState([]);

  const getApiStarWars = async () => {
    const result = await fetchAPI();
    const movie = result.results.filter((item) => delete item.residents);
    setData(movie);
    setDataKey(Object.keys(movie[0]));
  };

  useEffect(() => {
    getApiStarWars();
  }, []);

  return (
    <MyContext.Provider
      value={
        { data, dataKey }
      }
    >
      { children }
    </MyContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.Object,
}.isRequired;

export default StarWarsProvider;
