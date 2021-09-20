import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';

function DataTable() {
  const { data } = useContext(MyContext);
  // console.log(data);
  return (
    <table>
      <thead>
        <tr>
          {/* Objct.keys(contextValue)
          .map((planet, index) => <th keys="" value=""> />) */}
          <th> Name</th>
          <th> Name</th>
          <th> Name</th>
          <th> Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>data</td>
          <td>data</td>
          <td>data</td>
          <td>data</td>
        </tr>
      </tbody>
    </table>
  );
}

export default DataTable;
