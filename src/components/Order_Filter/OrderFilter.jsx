import React, { useContext, useState } from 'react';
import PlanetContext from '../../context/PlanetContext';
import { htmlID } from '../../util';

const OrderFilter = () => {
  // Context
  const { planets, filter, setFilter } = useContext(PlanetContext);
  const { filters: {
    order: { column, sort },
    filterByName,
    filterByNumericValues,
  } } = filter;

  const COLUMN_NAMES = Object.keys({ ...planets[0] })
    .filter((columns) => columns !== 'residents');

  const [columnOption, setColumnOption] = useState(column);
  const [orderOption, setOrderOption] = useState(sort);

  function handleColumnOrder() {
    const newOrder = { column: columnOption, sort: orderOption };
    setFilter({
      ...filter,
      ...{ filters:
        {
          filterByName,
          filterByNumericValues,
          order: newOrder,
        },
      },
    });
  }
  return (
    <div>
      <select
        data-testid="column-sort"
        name="columm"
        onChange={ ({ target: { value } }) => setColumnOption(value) }
        value={ columnOption }
      >
        {COLUMN_NAMES.map((name) => (
          <option key={ htmlID({ name }) } value={ name }>{ name }</option>)) }
      </select>
      <div className="form-check form-check-inline">
        <label className="form-check-label" htmlFor="inlineRadio1">
          Ascending
          <input
            className="form-check-input"
            name="inlineRadioOptions"
            type="radio"
            id="inlineRadio1"
            value="ASC"
            data-testid="column-sort-input-asc"
            onClick={ ({ target: { value } }) => setOrderOption(value) }
            defaultChecked
          />
        </label>
      </div>
      <div className="form-check form-check-inline">
        <label className="form-check-label" htmlFor="inlineRadio2">
          <input
            className="form-check-input"
            name="inlineRadioOptions"
            type="radio"
            id="inlineRadio2"
            value="DESC"
            data-testid="column-sort-input-desc"
            onClick={ ({ target: { value } }) => setOrderOption(value) }
          />
          Descending
        </label>
      </div>
      <button
        data-testid="column-sort-button"
        type="button"
        className="btn btn-dark"
        onClick={ handleColumnOrder }
      >
        Add Filter
      </button>
    </div>);
};

export default OrderFilter;
