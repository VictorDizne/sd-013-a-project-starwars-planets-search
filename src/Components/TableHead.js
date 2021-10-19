import React, { useContext } from 'react';
import SwapiContext from '../Context/SwapiContext';

function TableHead() {
  const { data } = useContext(SwapiContext);
  const dataConverter = Object.entries(data);
  const headerTitle = Object.keys(dataConverter[0][1]);
  return (
    <thead>
      <tr>{ headerTitle.map((item, index) => <th key={ index }>{item}</th>) }</tr>
    </thead>
  );
}

export default TableHead;
