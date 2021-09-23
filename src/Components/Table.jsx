// import React from 'react';
import React, { useContext } from 'react';
import MyContext from '../Contexto/MyContext';

function Table() {
  const { data } = useContext(MyContext);

  const header = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div>
      <table>
        <thead>
          <tr>{ header.map((title) => <th key={ title }>{ title }</th>)}</tr>
        </thead>
      </table>
    </div>
  );
}

export default Table;
