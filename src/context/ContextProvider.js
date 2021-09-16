import React from 'react';
import PropTypes from 'prop-types';
import context from './context';
import useFetch from '../hooks/useFetch';

const FETCH_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const ContextProvider = ({ children }) => {
  const { data } = useFetch(FETCH_URL);

  const value = {
    data,
  };

  return (
    <context.Provider value={ value }>
      {children}
    </context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
