// import React from 'react';
import React, { useContext } from 'react';
import MyContext from '../Contexto/MyContext';
import Tr from './Tr';

function Table() {
  const { data } = useContext(MyContext);

  const header = data.length > 0 ? Object.keys(data[0]) : [];

  const linhas = data.length > 0 ? data : [];

  return (
    <div>
      <table>
        <thead>
          <tr>{ header.map((title) => <th key={ title }>{ title }</th>)}</tr>
        </thead>
        <tbody>
          { linhas.map((allData) => <Tr key={ allData.name } allData={ allData } />)}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
