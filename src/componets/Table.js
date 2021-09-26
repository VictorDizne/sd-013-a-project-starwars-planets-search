import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import Th from './Th';
import Tr from './Tr';

function Table() {
  const { data } = useContext(DataContext);
  const titles = data.length > 0 ? Object.keys(data[0]) : [];
  // console.log(titles);
  const value = data.length > 0 ? data : [];
  return (
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
  );
}

export default Table;
