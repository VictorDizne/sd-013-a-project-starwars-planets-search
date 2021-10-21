import React, { useState } from 'react';
import PropTypes from 'prop-types';
import context from './context';
import useFetch from '../hooks/useFetch';

const MyProvider = ({ children }) => {
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

  const [columns] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);

  const [comparisons] = useState(['maior que',
    'menor que', 'igual a']);

  // Lógica entendida com ajuda de Gabriel Biasoli
  const filterNumericValues = () => numericFilters
    .reduce((acc, { column, comparison, numberValue }) => {
      const comparsionFilter = acc.filter((dataItem) => {
        const columnNumber = Number(dataItem[column]);
        if (comparison === 'maior que') return columnNumber > numberValue;
        if (comparison === 'menor que') return columnNumber < numberValue;
        return columnNumber === numberValue;
      });
      return comparsionFilter;
    }, data);

  const sortArray = (a, b) => {
    if (sort === 'ASC') return a[columnOption].length - b[columnOption].length;
    return b[columnOption].length - a[columnOption].length;
  };

  const contextValue = {
    data,
    filteredData,
    setFilteredData,
    filterNumericValues,
    sortArray,
    filters: {
      filterByName: {
        name,
        setName,
      },
      filterByNumericValues: numericFilters,
      order: {
        column: columnOption,
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
    arrays: { columns, comparisons },
  };

  return (
    <context.Provider value={ contextValue }>
      {children}
    </context.Provider>
  );
};

MyProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default MyProvider;
