import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './index';
import useFetch from '../hooks/useFetch';

function Provider({ children }) {
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const [optionColumn, setOptionColumn] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);

  const [optionComparison, setOptionComparison] = useState([
    'maior que', 'menor que', 'igual a']);

  const handleFiltersName = (name) => {
    setFilters({
      filterByName: {
        name,
      },
      filterByNumericValues: [...filters.filterByNumericValues],
    });
  };

  const handleFiltersNumeric = ({ column, comparison, value }) => {
    setFilters({
      filterByName: { ...filters.filterByName },
      filterByNumericValues: [
        ...filters.filterByNumericValues, { column, comparison, value }],
    });

    const filteredOptionsColumn = optionColumn.filter((option) => option !== column);
    setOptionColumn(filteredOptionsColumn);

    const filteredOptionsComparison = optionComparison
      .filter((option) => option !== comparison);
    setOptionComparison(filteredOptionsComparison);
  };

  const data = useFetch();

  const valueState = {
    data,
    handleFiltersName,
    handleFiltersNumeric,
    filters,
    optionColumn,
    optionComparison,
  };

  return (
    <Context.Provider value={ valueState }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = ({
  children: PropTypes.func.isRequired,
});

export default Provider;
