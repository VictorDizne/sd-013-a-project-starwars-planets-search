import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';
import Context from './Context';
import getAPIPlanets from '../serviceAPI/PlanetAPI';

function Provider({ children }) {
  const initialState = {
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  };

  const initialColums = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const initialFilter = {
    column: 'population',
    comparison: 'maior que',
    value: '0',
  };

  const [data, setData] = useState({});
  const [filters, setFilters] = useState(initialState);
  const [selectColumn] = useState(initialColums);
  const [selectFilter, setSelectFilter] = useState(initialFilter);

  const handleName = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: { name: value.toLowerCase() },
    });
  };

  const byNumericValue = (payload) => {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, { ...payload }],
    });
  };

  function handleFilter(payload) {
    setSelectFilter({ ...payload });
  }

  // function handleSelect({ target: { value } }) {
  //   setSelectFilter({
  //     ...selectFilter,
  //     column: value });
  //   setSelectColumn([
  //     ...initialColums.filter((select) => select !== value),
  //   ]);
  // }

  useEffect(() => {
    async function fetchPlanets() {
      setData(await getAPIPlanets());
    } fetchPlanets();
  }, []);

  const contextValue = {
    data,
    handleName,
    filters,
    selectColumn,
    handleFilter,
    selectFilter,
    byNumericValue,
    setFilters,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: node.isRequired,
};

export default Provider;
