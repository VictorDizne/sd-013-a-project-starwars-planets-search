import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [data, setData] = useState('');
  const [titlesTable, setTitlesTable] = useState([]);
  const [filters, setFilters] = useState();
  const [columnFilter, setColumnFilter] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const fetchApi = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((results) => results.json())
      .then((fetchData) => fetchData.results);
    setData(response);
  };

  useEffect(() => {
    if (data === '') {
      fetchApi();
    }

    const column = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];

    if (filters !== undefined) {
      const numericValue = filters.filters.filterByNumericValues;
      setColumnFilter(
        column.filter((c) => !numericValue
          .map((item) => item.column).includes(c)) !== column
          && column.filter((c) => !numericValue
            .map((item) => item.column).includes(c)),
      );
    }
  }, [data, filters]);

  return (
    <Context.Provider
      value={ { data,
        filters,
        setFilters,
        setData,
        columnFilter,
        setColumnFilter,
        titlesTable,
        setTitlesTable } }
    >
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
