import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ApiContext from './ApiContext';
import fetchApi from '../services/Api';
import filtersStructure from '../services/filter';

const ApiContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(filtersStructure);
  const [filteredData, setFilteredData] = useState([]);

  const contextValue = {
    data,
    setData,
    filteredData,
    setFilteredData,
    filters,
    setFilters,
  };

  const getApi = () => {
    fetchApi().then((response) => {
      const sortResponse = response.sort((a, b) => (
        a.name.localeCompare(b.name)
      ));
      setData(sortResponse);
      setFilteredData(sortResponse);
    });
  };

  const updateFilteredData = () => {
    let previousData = [...data];
    const { filterByName, filterByNumericValues, order } = filters;
    if (filterByName.name !== '') {
      previousData = previousData.filter(({ name }) => (
        name.toLowerCase().includes(filterByName.name)
      ));
    }

    if (filterByNumericValues.length > 0) {
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        switch (comparison) {
        case 'maior que':
          previousData = previousData.filter((cur) => (
            parseInt(cur[column], 10) > value));
          break;
        case 'menor que':
          previousData = previousData.filter((cur) => (
            parseInt(cur[column], 10) < value));
          break;
        case 'igual a':
          previousData = previousData.filter((cur) => (
            parseInt(cur[column], 10) === parseInt(value, 10)));
          break;
        default:
          break;
        }
      });
    }

    if (order !== { column: 'name', sort: 'ASC' }) {
      previousData.sort((a, b) => {
        switch (order.sort) {
        case 'ASC':
          return parseInt(a[order.column], 10) - parseInt(b[order.column], 10);
        case 'DESC':
          return parseInt(b[order.column], 10) - parseInt(a[order.column], 10);
        default:
          return 0;
        }
      });
    }
    return setFilteredData(previousData);
  };

  useEffect(getApi, []);
  useEffect(updateFilteredData, [filters]);

  return (
    <ApiContext.Provider value={ contextValue }>
      {children}
    </ApiContext.Provider>
  );
};

ApiContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApiContextProvider;
