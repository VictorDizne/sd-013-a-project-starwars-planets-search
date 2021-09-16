import React from 'react';
import MyContext from '../Context';

function OrderFunc() {
  return (
    <div>
      <label htmlFor="filter-column">
        Filter by column
        <MyContext.Consumer>
          {
            ({ headers, handleOrderColumn }) => (
              <select
                onChange={ handleOrderColumn }
                name="filter-column"
                id="filter-column"
                data-testid="column-sort"
              >
                {headers.map((head) => <option key={ head }>{head}</option>)}
              </select>
            )
          }
        </MyContext.Consumer>
        <MyContext.Consumer>
          {
            ({ handleOrder, buttonClickOrder }) => (
              <div>
                <label htmlFor="ASC">
                  ASC
                  <input
                    type="radio"
                    id="ASC"
                    name="order"
                    value="ASC"
                    data-testid="column-sort-input-asc"
                    onChange={ handleOrder }
                  />
                </label>
                <label htmlFor="DESC">
                  DESC
                  <input
                    type="radio"
                    id="DESC"
                    name="order"
                    value="DESC"
                    data-testid="column-sort-input-desc"
                    onChange={ handleOrder }
                  />
                </label>
                <button
                  type="button"
                  data-testid="column-sort-button"
                  onClick={ buttonClickOrder }
                >
                  ORDENAR
                </button>
              </div>
            )
          }
        </MyContext.Consumer>
      </label>
    </div>

  );
}

export default OrderFunc;
