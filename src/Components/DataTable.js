import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';
import PlanetBody from './PlanetBody';

function DataTable() {
  const { data, head } = useContext(MyContext);
  console.log(data);

  return (
    <table border={ 1 }>
      <thead>
        <tr>
          {head.map((item, id) => <th key={ id }>{head}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((planet, i) => <PlanetBody key={ i } planet={ planet } />)}
      </tbody>
    </table>
  );
}

export default DataTable;
