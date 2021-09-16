import React from 'react';
import MyContext from '../Context';

function SelectColumn() {
  return (
    <div>
      <label htmlFor="filter-column">
        Filter by column
        <MyContext.Consumer>
          {
            ({ handleColumn, columnOptionsFil }) => (
              <select
                onChange={ handleColumn }
                name="filter-column"
                id="filter-column"
                data-testid="column-filter"
              >
                {
                  columnOptionsFil.map((cl) => <option key={ cl }>{cl}</option>)
                }
              </select>
            )
          }
        </MyContext.Consumer>
      </label>
    </div>

  );
}

export default SelectColumn;
