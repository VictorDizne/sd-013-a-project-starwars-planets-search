import React from 'react';
import MyContext from '../Context';

function InputFilterName() {
  return (
    <div>
      <label htmlFor="filter-name">
        Filter by name
        <MyContext.Consumer>
          {
            ({ handleName }) => (
              <input
                type="text"
                name="filter-name"
                id="filter-name"
                onChange={ handleName }
                data-testid="name-filter"
              />
            )
          }
        </MyContext.Consumer>
      </label>
    </div>

  );
}

export default InputFilterName;
