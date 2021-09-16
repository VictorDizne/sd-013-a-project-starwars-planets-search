import React from 'react';
import MyContext from '../Context';

const columns = 0;

function FilterButton() {
  return (
    <div>
      <MyContext.Consumer>
        {
          ({ buttonClick }) => (
            <button
              type="button"
              name="filter-name"
              id="filter-name"
              onClick={ buttonClick }
              data-testid="button-filter"
            >
              Filtrar
            </button>
          )
        }
      </MyContext.Consumer>
      <div data-testid="filter">
        <MyContext.Consumer>
          {
            ({ stateValue,
              deleteButton }) => (stateValue.filterByNumericValues.length > columns
              ? stateValue.filterByNumericValues.map((col, i) => (
                <button
                  type="button"
                  name={ col.column }
                  key={ i }
                  onClick={ deleteButton }
                >
                  X
                </button>)) : false)
          }
        </MyContext.Consumer>
      </div>
    </div>

  );
}

export default FilterButton;
