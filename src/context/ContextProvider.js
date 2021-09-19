import React, { useState } from 'react';
import PropTypes from 'prop-types';
import context from './context';
import useFetch from '../hooks/useFetch';

const ContextProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [numericFilters, setNumericFilters] = useState([]);

  const [sort, setSort] = useState('ASC');
  const [columnOption, setColumnOption] = useState('name');
  const { data } = useFetch();

  const [filteredData, setFilteredData] = useState(data);

  const getTitles = () => {
    delete data[0].url;
    return Object.keys(data[0]);
  };

  const contextValue = {
    data,
    filteredData,
    setFilteredData,
    filters: {
      filterByName: {
        name,
        setName,
      },
      filterByNumericValues: numericFilters,
      order: {
        columnOption,
        sort,
        sortSetters: {
          setSort,
          setColumnOption,
        },
      },
    },
    setFilters: {
      setName,
      setNumericFilters,
    },
    getTitles,
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
