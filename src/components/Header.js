import React, { useContext } from 'react';
import ContextSwapi from '../context/ContextSwapi';

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
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
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
