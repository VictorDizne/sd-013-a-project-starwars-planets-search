import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import Th from './Th';
import Tr from './Tr';

function Table() {
  const { data } = useContext(PlanetContext);
  const titles = data.length > 0 ? Object.keys(data[0]) : [];
  const content = data.length > 0 ? data : [];
  return (
    <table>
      <thead>
        <tr>{titles.map((title, index) => <Th Key={ index } title={ title } />)}</tr>
      </thead>
      <tbody>
        { content.map((info, index) => <Tr Key={ index } data={ info } />)}
      </tbody>
    </table>
  );
}

export default Table;
