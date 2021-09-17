import React from 'react';
import usePlanetsContext from '../../hooks/usePlanetsContext';
import Input from '../Input';
import Select from '../Select';

function NumericFilters() {
  const { filterByColumn } = usePlanetsContext();
  return (
    <form
      onSubmit={ (event) => {
        event.preventDefault();
        filterByColumn();
      } }
    >
      <Select
        options={ [
          'population',
          'orbital_period',
          'diameter',
          'rotation_period',
          'surface_water'] }
        dataTestid="column-filter"
        name="column"
        // setFilter={ () => {} }
      />

      <Select
        options={ ['maior que', 'menor que', 'igual a'] }
        dataTestid="comparison-filter"
        name="comparison"
      />

      <Input />

      <button type="submit" data-testid="button-filter">
        Filtrar
      </button>
    </form>
  );
}

export default NumericFilters;
