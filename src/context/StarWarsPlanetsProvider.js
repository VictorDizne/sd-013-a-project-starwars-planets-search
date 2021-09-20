import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import StarWarsPlanetsAPI from '../services/StarWarsPlanetsAPI';
import StarWarsPlanetsContext from './StarWarsPlanetsContext';

function StarWarsPlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [dataKey, setDataKey] = useState([]);

  const responseAPI = async () => {
    const result = await StarWarsPlanetsAPI();
    const movie = result.results.filter((item) => delete item.residents);
    setData(movie);
    setDataKey(Object.keys(movie[0]));
  };

  useEffect(() => {
    responseAPI();
  }, []);

  return (
    <StarWarsPlanetsContext.Provider
      value={
        { data, dataKey }
      }
    >
      { children }
    </StarWarsPlanetsContext.Provider>
  );
}

StarWarsPlanetsProvider.propTypes = {
  children: PropTypes.Object,
}.isRequired;

export default StarWarsPlanetsProvider;
