import React, { useContext, useState } from 'react';
import AppContext from '../../helpers/AppContext';

import { allLegends } from '../../consts';

export default function OrderFilters() {
  const [orderedColumn, setOrderedColumn] = useState('name');
  const [ascOrDesc, setAscOrDesc] = useState('ASC');

  const { sets: { setColumnOrder, setAscOrDescOrder } } = useContext(AppContext);

  return (
    <section className="container_filter_order-FiIn">
      <label className="label_select_FiIn" htmlFor="asc-desc-filter">
        Order:
        <select
          onChange={ ({ target: { value } }) => setOrderedColumn(value) }
          value={ orderedColumn }
          id="asc-desc-filter"
          data-testid="column-sort"
        >
          { allLegends.map((element, index) => (
            <option key={ index } value={ element }>{ element }</option>
          )) }
        </select>
      </label>
      <label htmlFor="ascending-filter">
        Sort By ascending:
        <input
          value="ASC"
          data-testid="column-sort-input-asc"
          onClick={ ({ target: { value } }) => setAscOrDesc(value) }
          name="ascending-descending-filter"
          id="ascending-filter"
          type="radio"
          defaultChecked
        />
      </label>
      <label htmlFor="descending-filter">
        Sort By descending:
        <input
          value="DESC"
          data-testid="column-sort-input-desc"
          onClick={ ({ target: { value } }) => setAscOrDesc(value) }
          name="ascending-descending-filter"
          id="descending-filter"
          type="radio"
        />
      </label>
      <button
        onClick={ () => {
          setAscOrDescOrder(ascOrDesc);
          setColumnOrder(orderedColumn);
        } }
        type="button"
        data-testid="column-sort-button"
      >
        Ordenar
      </button>
    </section>
  );
}
