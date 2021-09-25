import React, { useContext } from 'react';
import MyContext from '../context/Context';

const Table = () => {
  const { data } = useContext(MyContext);
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>rotation period</th>
          <th>oributal period</th>
          <th>diamenter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface water</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>eduted</th>
          <th>url</th>
        </tr>
      </thead>
      { data.name }
    </table>
  );
};

export default Table;
