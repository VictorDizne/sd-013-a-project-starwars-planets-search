import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import Th from './Th';
import Tr from './Tr';

function Table() {
  const { data, filters, setFilters } = useContext(PlanetContext);
  const { filterByName: { name } } = filters;
  const titles = data.length > 0 ? Object.keys(data[0]) : [];
  const content = data.length > 0 ? data : [];

  function handleChange({ target: { value } }) {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  }

  return (
    <>
      <form>
        <input type="text" data-testid="name-filter" onChange={ handleChange } />
      </form>
      <table>
        <thead>
          <tr>{titles.map((title, index) => <Th Key={ index } title={ title } />)}</tr>
        </thead>
        <tbody>
          { content
            .filter((info) => info.name.includes(name))
            .map((info, index) => <Tr Key={ index } data={ info } />)}
        </tbody>
      </table>
    </>
  );
}

export default Table;
