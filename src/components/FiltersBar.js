import React, { useContext, useState, useEffect } from 'react';
import { Input, Select, Button } from '.';
import Context from '../context/Context';

function FiltersBar() {
  const { filters: { filterByNumericValues }, setFilters } = useContext(Context);
  const comparisonOpt = ['maior que', 'menor que', 'igual a'];
  const columnsList = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];
  const [columnsOpt, setColumnsOpt] = useState(columnsList);

  useEffect(() => {
    if (filterByNumericValues.length > 0) {
      let newListOpt;
      filterByNumericValues.forEach(({ column }) => {
        newListOpt = columnsList.filter((item) => item !== column);
      });
      setColumnsOpt(newListOpt);
    }
  }, [filterByNumericValues]);

  function nameChange({ target: { value } }) {
    setFilters((state) => ({
      ...state,
      filterByName: { name: value },
    }));
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

  function deleteFilter({ target }) {
    const column = target.className;
    const filters = filterByNumericValues.filter((filter) => filter.column !== column);
    setFilters((state) => ({
      ...state,
      filterByNumericValues: filters,
    }));
  }

  function renderFiltersBtn() {
    if (filterByNumericValues.length > 0) {
      return (filterByNumericValues.map((filter) => (
        <div key={ filter.column } data-testid="filter">
          <span>{`${filter.column} ${filter.comparison} ${filter.value}`}</span>
          <Button
            className={ filter.column }
            name="X"
            onClick={ deleteFilter }
          />
        </div>))
      );
    }
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
          options={ columnsOpt }
          test="column-filter"
        />
        <Select
          name="comparison"
          options={ comparisonOpt }
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
      <div>
        {renderFiltersBtn()}
      </div>
    </div>
  );
}

export default FiltersBar;
