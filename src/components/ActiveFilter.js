import React, { useContext } from 'react';
import Context from './mycontext';

const ActiveFilter = () => {
  const { activeFilters, clearFilter } = useContext(Context);

  if (activeFilters.length > 0) {
    return (
      <div>
        <h2 className="page-header">Os filtros ativos atualmente são:</h2>
        {activeFilters.map((filter) => (
          <div key={ filter.columnNumericFilter }>
            <h3 className="page-header">
              { `${filter.columnNumericFilter} 
                ${filter.comparisonNumericFilter}
              ${filter.numericFilter}` }
              <button
                type="button"
                data-testid="filter"
                onClick={ () => clearFilter(filter.columnNumericFilter) }
                className="btn btn-danger clear-filter-btn"
              >
                X
              </button>
            </h3>
          </div>))}
      </div>
    );
  }
  return null;
};

export default ActiveFilter;
