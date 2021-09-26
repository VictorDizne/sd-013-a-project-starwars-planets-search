import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import Th from './Th';
import Tr from './Tr';

function Table() {
  const { data, filters, setFilters } = useContext(DataContext);
  const titles = data.length > 0 ? Object.keys(data[0]) : [];
  console.log(filters.filterByName.name);
  const value = data.length > 0 ? data : [];

  function handleChange({ target }) {
    setFilters({ ...filters, filterByName: { name: target.value } });
  }

  return (
    <>
      <form>
        <input
          type="text"
          data-testid="name-filter"
          onChange={ handleChange }
        />
      </form>
      <table>
        <thead>
          <tr>
            {titles.map((title, index) => <Th key={ index } title={ title } />)}
          </tr>
        </thead>
        <tbody>
          {value.map((obj, index) => <Tr key={ index } value={ obj } />)}
        </tbody>
      </table>
    </>
  );
}

export default Table;
