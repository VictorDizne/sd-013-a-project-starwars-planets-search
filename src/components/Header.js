import React, { useContext } from 'react';
import ContextSwapi from '../context/ContextSwapi';

const columnsToSort = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'terrain',
  'surface_water',
  'population',
];

export default function Header() {
  const { orderDataList } = useContext(ContextSwapi);

  const handleClickOrder = () => {
    const sort = document.getElementById('column-sort-desc').checked ? 'DESC' : 'ASC';
    const column = document.getElementById('column-sort-order').value;
    orderDataList(column, sort);
  };
  return (
    <div className="header-content">
      <div className="header-order">
        <select name="order" id="column-sort-order" data-testid="column-sort">
          {columnsToSort.map((o) => <option key={ o } value={ o }>{o}</option>)}
        </select>
        <div>
          <label htmlFor="column-sort-input-asc">
            <input
              type="radio"
              id="column-sort-input-asc"
              name="column-sort"
              value="ASC"
              data-testid="column-sort-input-asc"
            />
            ASC
          </label>
          <label htmlFor="column-sort-desc">
            <input
              type="radio"
              id="column-sort-desc"
              name="column-sort"
              value="DESC"
              data-testid="column-sort-input-desc"
            />
            DESC
          </label>
        </div>
        <button
          type="button"
          onClick={ handleClickOrder }
          data-testid="column-sort-button"
        >
          Aplicar
        </button>
      </div>
      <h1> Projeto StarWars Planets Search</h1>
      <div Style="width: 10%" />
    </div>
  );
}
