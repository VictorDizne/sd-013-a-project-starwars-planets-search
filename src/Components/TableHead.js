import React, { useContext } from 'react';
import SwapiContext from '../Context/SwapiContext';

function TableHead() {
  const { data } = useContext(SwapiContext);
  const headerTitle = Object.keys(data[0]);
  return (
    <thead>
      <tr>{ headerTitle.map((item, index) => <th key={ index }>{item}</th>) }</tr>
    </thead>
  );
}

export default TableHead;
