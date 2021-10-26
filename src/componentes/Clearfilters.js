import React, { useContext } from 'react';
import contextApp from '../context/contextApp';

const ClearFilters = () => {
  const { filters, setFilters } = useContext(contextApp);
  const { filterByNumericValues } = filters;

  // Falta a parte de devolver as colunas do botão "X" clicadas.
  const deleteFilters = (filter) => {
    const removeFilterByNumeric = filterByNumericValues
      .filter(({ column }) => column !== filter.column);
    setFilters({
      ...filters,
      filterByNumericValues: removeFilterByNumeric,
    });
  };

  if (filterByNumericValues.length === 0) return null;
  if (filterByNumericValues.length > 0) {
    return (
      <section className="filters">
        <span className="filter-title">Filtros aplicados:</span>
        {
          filterByNumericValues.map((filter) => (
            <span
              data-testid="filter"
              key={ filter.column }
            >
              { `${filter.column} | ${filter.comparison} | ${filter.value}` }
              <button
                type="button"
                value={ filter.column }
                onClick={ () => deleteFilters(filter) }
              >
                X
              </button>
            </span>
          ))
        }
      </section>
    );
  }
};
export default ClearFilters;
