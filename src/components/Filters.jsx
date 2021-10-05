import React from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const size = 0.7;
  return (
    <PlanetsContext.Consumer>
      { (contextValue) => (
        <section style={ { fontSize: `${size} em`, marginBottom: `${size} em` } }>
          <label htmlFor="search_by_name">
            Nome
            <input
              data-testid="name-filter"
              type="text"
              id="search_by_name"
              onChange={ ({ target }) => contextValue.handleFilter(target.value) }
            />
          </label>
        </section>
      )}
    </PlanetsContext.Consumer>
  );
}

export default Table;
