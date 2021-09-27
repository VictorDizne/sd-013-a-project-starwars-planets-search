import React, { useState, useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';

function SelectFilters() {
  const optionColumns = ['population', 'orbital_period', 'rotation_period', 'diameter',
    'surface_water'];
  const { filters, setFilters } = useContext(MyContext);
  const { filterByNumericValues } = filters;
  const [columnState, setColumnState] = useState(optionColumns);
  const [hiddenStatus, setHiddenStatus] = useState(false);
  const [localFilter, setLocalFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  function handleChange(event) {
    setLocalFilter({
      ...localFilter,
      [event.target.name]: event.target.value,
    });
  }

  function changeFilterContext() {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, localFilter],
    });
  }

  useEffect(() => {
    const columnFilter = filterByNumericValues.map((filterNum) => filterNum.column);
    const filterRest = optionColumns.filter((oc) => !columnFilter.includes(oc));
    setColumnState(filterRest);
  }, [filterByNumericValues]);

  useEffect(() => {
    const columnValue = document.getElementById('column').value;
    setLocalFilter({
      ...localFilter,
      column: columnValue,
    });
    if (columnState.length === 0) {
      setHiddenStatus(true);
    } else {
      setHiddenStatus(false);
    }
  }, [columnState]);

  return (
    <div>
      <select
        name="column"
        id="column"
        data-testid="column-filter"
        onChange={ handleChange }
        hidden={ hiddenStatus }
      >
        {columnState.map((c, index) => <option key={ index } value={ c }>{c}</option>)}
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ handleChange }
        hidden={ hiddenStatus }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        name="value"
        data-testid="value-filter"
        onChange={ handleChange }
        hidden={ hiddenStatus }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ changeFilterContext }
      >
        Acionar filtro
      </button>
    </div>
  );
}

export default SelectFilters;
