import React, { useContext, useState, useEffect } from 'react';
import contextApp from '../context/contextApp';

function FilterNumber() {
  const {
    filters: { filterByNumericValues },
    setFilters,
  } = useContext(contextApp);

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

  const [columnList, setColumnList] = useState(tableColumns);

  const [numericFilter, setNumericFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '10000',
  });

  const handleChange = ({ target }) => {
    setNumericFilter((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

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

  // useEffect(() => {
  //   const newColumn = tableColumns.filter((column) => !filterByNumericValues
  //     .some((filter) => filter.column === column))
  //     .map((nextColumn) => nextColumn);

  //   setNumericFilter((prevState) => ({
  //     ...prevState,
  //     column: newColumn[0],
  //   }));
  //   setColumnList(newColumn);
  // }, [filterByNumericValues, tableColumns]);

  // const deleteFilters = (currentColumn) => {
  //   const removeFilterByNumeric = filterByNumericValues
  //     .filter(({ column }) => column !== currentColumn);
  //   setFilters({
  //     // ...filters,
  //     filterByNumericValues: [removeFilterByNumeric],
  //   });
  // };

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
      {/* { filterByNumericValues.map(({ column, comparison, values }) => (
        <span data-testid="filter" key={ column }>
          { `Filtros: ${column} ${comparison} ${values}` }
          <button
            type="button"
            onClick={ () => deleteFilters() }
          >
            X

          </button>
        </span>
      )) } */}
    </div>
  );
}

export default FilterNumber;
