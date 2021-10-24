import React, { useState, useContext } from 'react';

import ApiContext from '../context/ApiContext';

function FilterByNumber() {
  const INITIAL_STATE = {
    column: '',
    comparison: '',
    value: null,
  };

  const columnsFilters = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const [tableColumns, setTableColumns] = useState(columnsFilters);
  const [currentFilter, setCurrentFilter] = useState(INITIAL_STATE);
  const { filters, setFilters } = useContext(ApiContext);

  const handleChange = ({ target: { name, value } }) => {
    setCurrentFilter({ ...currentFilter, [name]: value });
  };

  const applyFilter = () => {
    const { column, comparison, value } = currentFilter;
    if (column !== '' && comparison !== '' && value !== null) {
      setFilters({
        ...filters,
        filterByNumericValues: [
          ...filters.filterByNumericValues,
          {
            ...currentFilter,
          },
        ],
      });
      setTableColumns(tableColumns.filter((current) => current !== currentFilter.column));
      setCurrentFilter(INITIAL_STATE);
    }
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ (event) => handleChange(event) }
      >
        {tableColumns.map((current) => <option key={ current }>{current}</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ (event) => handleChange(event) }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        placeholder="Insira um valor"
        name="value"
        onChange={ (event) => handleChange(event) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ applyFilter }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterByNumber;
