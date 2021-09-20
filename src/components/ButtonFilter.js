import React, { useContext, useState, useEffect } from 'react';
import MyContext from '../context/Context';

const columns = ['population', 'orbital_period', 'rotation_period', 'diameter',
  'surface_water'];

const SelectFilters = () => {
  const { filters, setFilters } = useContext(MyContext);
  const { filterByNumericValues } = filters;

  const [availableColumns, setAvailableColumns] = useState(columns);

  const [hiddenStatus, setHiddenStatus] = useState(false);

  const [filterOptions, setFilterOptions] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const handleChange = ({ target: { value, name } }) => {
    setFilterOptions({
      ...filterOptions,
      [name]: value,
    });
  };

  const addFilter = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        filterOptions,
      ],
    });
  };
  useEffect(() => {
    const aplliedColumnFilters = filterByNumericValues.map((af) => af.column);
    const remainingColumns = columns.filter((c) => !aplliedColumnFilters.includes(c));
    console.log(remainingColumns, 'remaining');
    setAvailableColumns(remainingColumns);
  }, [filterByNumericValues]);

  useEffect(() => {
    const columnValue = document.getElementById('column').value;
    setFilterOptions({
      ...filterOptions,
      column: columnValue,
    });
    if (availableColumns.length === 0) {
      setHiddenStatus(true);
    } else {
      setHiddenStatus(false);
    }
  }, [availableColumns]);

  return (
    <>
      <select
        name="column"
        id="column"
        onChange={ handleChange }
        data-testid="column-filter"
        hidden={ hiddenStatus }
      >
        { availableColumns
          .map((c, index) => <option key={ index } value={ c }>{c}</option>)}
      </select>

      <select
        name="comparison"
        id="comparison"
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
        id="value"
        name="value"
        data-testid="value-filter"
        placeholder="Value"
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ addFilter }
      >
        Apply
      </button>
    </>
  );
};
export default SelectFilters;

// Req 3 - Feito com o Auxilido do Edu na monitoria, junto com Aline e a Julia.

// Req 4 - Feito com a ajuda da aluna Julia.
