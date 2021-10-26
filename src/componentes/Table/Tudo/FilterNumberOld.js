/* import React, { useContext, useState } from 'react';
import contextApp from '../context/contextApp';

function FilterNumber() {
  const FIRST_STATE = {
    column: '',
    comparison: '',
    value: null,
  };

  const ColumnsFilters = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const [tableColumns, setTableColumns] = useState(ColumnsFilters);
  const [currentFilter, setCurrentFilter] = useState(FIRST_STATE);
  const { filters, setFilters } = useContext(contextApp);

  const handleChange = ({ target: { name, value } }) => {
    setCurrentFilter({ ...currentFilter, [name]: value });
  };

  const NewFilter = () => {
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
      setCurrentFilter(FIRST_STATE);
    }
  };

  return (
    <div>
      <select
        name="column"
        onChange={ (e) => handleChange(e) }
        data-testid="column-filter"
      >
        {tableColumns.map((current) => (
          <option
            key={ current }
          >
            { current }
          </option>
        ))}
      </select>

      <select
        name="comparison"
        onChange={ (e) => handleChange(e) }
        data-testid="comparison-filter"
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>

      <input
        type="number"
        name="value"
        onChange={ (e) => handleChange(e) }
        data-testid="value-filter"
      />

      <button
        type="button"
        onClick={ NewFilter }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterNumber;
 */
