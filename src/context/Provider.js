import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Context from './Context';
import fetchStarWarsAPI from '../services/starWarsAPI';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const initialFilters = {
    filterByName: {
      name: '',
    },

    filterByNumericValues: [],

    order: {
      column: 'name',
      sort: 'ASC',
    },
  };

  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    fetchStarWarsAPI(setData);
  }, []);

  const context = {
    data,
    filters,
    setData,
    setFilters,
  };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
