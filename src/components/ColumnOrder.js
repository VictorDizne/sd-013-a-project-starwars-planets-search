import React, { useContext, useState, useEffect } from 'react';
import context from '../context/context';

// Falta adicionar referências
const ColumnOrder = () => {
  const { filters: {
    order: { columnOption, sortSetters: { setColumnOption, setSort } },
  },
  getTitles, data, setFilteredData } = useContext(context);

  const titles = getTitles();

  const [controlColumn, setControledColumn] = useState('name');
  const [controlSort, setControlSort] = useState('ASC');

  const newData = [...data];
  const sortData = () => {
    newData.sort((a, b) => a[columnOption] - b[columnOption]);
    setFilteredData(newData);
  };

  useEffect(sortData, []);

  const logSort = () => {
    setColumnOption(controlColumn);
    setSort(controlSort);
    sortData();
  };

  return (
    <>
      <select
        name="titles"
        data-testid="column-sort"
        onChange={ ({ target }) => setControledColumn(target.value) }
      >
        {titles.map((title) => <option key={ title }>{title}</option>)}
      </select>
      <label htmlFor="ASC">
        Ascendente
        <input
          type="radio"
          data-testid="column-sort-input-asc"
          name="order"
          value="ASC"
          id="ASC"
          onChange={ ({ target }) => setControlSort(target.value) }
        />
      </label>
      <label htmlFor="DESC">
        Descendente
        <input
          type="radio"
          data-testid="column-sort-input-desc"
          name="order"
          value="DESC"
          id="DESC"
          onChange={ ({ target }) => setControlSort(target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => logSort() }
      >
        Order

      </button>
    </>
  );
};

export default ColumnOrder;
