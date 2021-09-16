import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import myContext from './MyContext';
import ApiStarWars from '../services/fectApiStarWars';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [dataKeys, setDataKeys] = useState([]);

  const getApiStarWars = async () => {
    const result = await ApiStarWars();
    const movie = result.results.filter((element) => delete element.residents);
    setData(movie);
    setDataKeys(Object.keys(movie[0]));
  };

  useEffect(() => {
    getApiStarWars();
  }, []);

  return (
    <myContext.Provider value={ { data, dataKeys } }>
      { children }
    </myContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.objectOf,
}.isRequired;

export default StarWarsProvider;
