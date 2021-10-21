import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './AppContext';

export default function Provider({ children }) {
  const [data, setData] = useState('');
  const [titlesContentTable, setTitlesContentTable] = useState([]);
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
      .then((res) => res.json())
      .then((resData) => resData.results);
    setData(response);
  };

  useEffect(() => {
    if (data === '') {
      fetchApi();
    }

    const columnsArray = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];

    // Column filter system > https://github.com/tryber/sd-013-a-project-starwars-planets-search/blob/felipe-lima-project-starwars-planet-search/src/context/Provider.js
    if (filters !== undefined) {
      const numericValue = filters.filters.filterByNumericValues;
      setColumnFilter(columnsArray
        .filter((targetColumn) => !numericValue.map((item) => item.column)
          .includes(targetColumn)) !== columnsArray && columnsArray
        .filter((targetColumn) => !numericValue
          .map((item) => item.column).includes(targetColumn)));
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
        titlesContentTable,
        setTitlesContentTable } }
    >
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
