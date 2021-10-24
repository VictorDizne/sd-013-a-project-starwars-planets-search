import React, { useContext, useState, useEffect } from 'react';
import contextApp from '../context/contextApp';

const tableColumns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const comparisons = [
  'maior que',
  'menor que',
  'igual a',
];

function FilterNumber() {
  const {
    filters: { filterByNumericValues },
    setFilters,
    handleChange,
    numericFilter,
    setNumericFilter,
    filters,
  } = useContext(contextApp);

  const [columnList, setColumnList] = useState(tableColumns);

  const handleFilterByNumericValues = ({ column, comparison, value }) => {
    setFilters((prevFilters) => {
      if (!filterByNumericValues[0].value) {
        return {
          ...prevFilters,
          filterByNumericValues: [
            {
              column,
              comparison,
              value,
            },
          ],
        };
      }
      return {
        ...prevFilters,
        filterByNumericValues: [
          ...filterByNumericValues,
          { column, comparison, value },
        ],
      };
    });
  };

  const optionsFilterRemove = () => {
    const newColumn = tableColumns.filter((column) => !filterByNumericValues
      .some((filter) => filter.column === column))
      .map((nextColumn) => nextColumn);
    console.log(newColumn);
    setNumericFilter((prevState) => ({
      ...prevState,
      column: newColumn[0],
    }));
    setColumnList(newColumn);
    console.log(numericFilter);
  };

  useEffect(optionsFilterRemove, [filterByNumericValues]);

  const deleteFilters = (currentColumn) => {
    const removeFilterByNumeric = filterByNumericValues
      .filter(({ column }) => column !== currentColumn);
    setFilters({
      ...filters,
      filterByNumericValues: [removeFilterByNumeric],
    });
  };

  return (
    <div className="filter-number">
      <select
        name="column"
        onChange={ (e) => handleChange(e) }
        data-testid="column-filter"
      >
        {columnList.map((column) => (
          <option key={ column } value={ column }>
            {column}
          </option>
        ))}
      </select>

      <select
        name="comparison"
        onChange={ (e) => handleChange(e) }
        data-testid="comparison-filter"
      >
        {comparisons.map((column) => (
          <option key={ column }>
            {column}
          </option>
        ))}
      </select>

      <input
        type="number"
        name="value"
        onChange={ (e) => handleChange(e) }
        data-testid="value-filter"
      />

      <button
        type="button"
        onClick={ () => handleFilterByNumericValues(numericFilter) }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterNumber;
