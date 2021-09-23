// import React from 'react';
import React, { useContext } from 'react';
import MyContext from '../Contexto/MyContext';
import Tr from './Tr';

function Table() {
  const { data, filters, setFilters } = useContext(MyContext);
  const { filterByName: { name } } = filters;

  const header = data.length > 0 ? Object.keys(data[0]) : [];

  const linhas = data.length > 0 ? data : [];

  function hanfleChange({ target }) {
    setFilters({
      ...filters,
      filterByName: { name: target.value },
    });
  }

  return (
    <div>
      <form>
        <label htmlFor="name-filter">
          <input
            type="text"
            data-testid="name-filter"
            placeholder="Planet"
            onChange={ hanfleChange }
          />
        </label>
      </form>
      <table>
        <thead>
          <tr>{ header.map((title) => <th key={ title }>{ title }</th>)}</tr>
        </thead>
        <tbody>
          { linhas
            .filter((allData) => allData.name.includes(name))
            .map((allData) => <Tr key={ allData.name } allData={ allData } />)}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
