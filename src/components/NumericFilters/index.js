import React, { useState } from 'react';
import usePlanetsContext from '../../hooks/usePlanetsContext';
import Input from '../Input';
import Select from '../Select';

function NumericFilters() {
  const {
    filterNumeric,
    setFilterNumeric,
    columnsFilter,
    setColumnsFilter,
  } = usePlanetsContext();

  const [currentFilter, setCurrentFilter] = useState({
    column: 'population', comparison: 'maior que', value: 0,
  });

  const removeFilter = () => {
    const removedFromFilters = columnsFilter
      .filter((column) => column !== currentFilter.column);
    setColumnsFilter(removedFromFilters);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFilterNumeric([...filterNumeric, currentFilter]);
    removeFilter();
  };

  return (
    <form
      onSubmit={ handleSubmit }
    >
      <Select
        options={ columnsFilter }
        dataTestid="column-filter"
        name="column"
        currentFilter={ currentFilter }
        setCurrentFilter={ setCurrentFilter }
      />

      <Select
        options={ ['maior que', 'menor que', 'igual a'] }
        dataTestid="comparison-filter"
        name="comparison"
        currentFilter={ currentFilter }
        setCurrentFilter={ setCurrentFilter }
      />

      <Input
        currentFilter={ currentFilter }
        setCurrentFilter={ setCurrentFilter }
      />

      <button type="submit" data-testid="button-filter">
        Filtrar
      </button>
    </form>
  );
}

export default NumericFilters;
