import React, { useContext } from 'react';
import { Button, Input, Select } from '.';
import Context from '../context/Context';

function FiltersBar() {
  const { setFilters } = useContext(Context);
  const columnsOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];
  const comparisonOptions = ['maior que', 'menor que', 'igual a'];

  function nameChange({ target: { value } }) {
    setFilters({ filterByName: { name: value } });
  }

  function searchClick() {
    const column = document.getElementById('column').value;
    const comparison = document.getElementById('comparison').value;
    const inputValue = document.getElementById('value').value;

    const newObj = { column, comparison, value: inputValue };
    setFilters((state) => ({
      ...state,
      filterByNumericValues: [...state.filterByNumericValues, newObj],
    }));
  }

  return (
    <div>
      <Input
        type="text"
        onChange={ nameChange }
        test="name-filter"
        name="Search"
      />
      <div>
        <Select
          name="column"
          options={ columnsOptions }
          test="column-filter"
        />
        <Select
          name="comparison"
          options={ comparisonOptions }
          test="comparison-filter"
        />
        <Input
          type="number"
          name="value"
          test="value-filter"
        />
        <Button
          name="Send"
          onClick={ searchClick }
          test="button-filter"
        />
      </div>
    </div>
  );
}

export default FiltersBar;
