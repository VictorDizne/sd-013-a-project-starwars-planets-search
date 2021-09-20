import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [data, setData] = useState('');
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
  }, [data]);

  return (
    <main>
      <Context.Provider
        value={ { data,
          filters,
          setFilters,
          setData,
          columnFilter,
          setColumnFilter } }
      >
        {children}
      </Context.Provider>
    </main>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
