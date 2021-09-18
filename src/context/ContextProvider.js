import React, { useState } from 'react';
import PropTypes from 'prop-types';
import context from './context';
import useFetch from '../hooks/useFetch';

const FETCH_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const ContextProvider = ({ children }) => {
  const { data } = useFetch(FETCH_URL);

  const [name, setName] = useState('');
  const [numericFilters, setNumericFilters] = useState([]);

  const contextValue = {
    data,
    filters: {
      filterByName: {
        name,
        setName,
      },
      filterByNumericValues: numericFilters,
      order: {
        column: 'Name',
        sort: 'ASC',
      },
    },
    setFilters: {
      setName,
      setNumericFilters,
    },

  };

  return (
    <context.Provider value={ contextValue }>
      {children}
    </context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default ContextProvider;
