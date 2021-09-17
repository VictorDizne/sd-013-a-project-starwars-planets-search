import React, { useContext } from 'react';
import starWarsContext from '../Context';

function TableHead() {
  const { data } = useContext(starWarsContext);
  const dataEntries = Object.entries(data);
  const titleArray = Object.keys(dataEntries[0][1]);
  return (
    <thead>
      <tr>
        { titleArray.map((title, index) => {
          if (title !== 'residents') return <th key={ index }>{ title }</th>;
          return null;
        })}
      </tr>
    </thead>
  );
}

export default TableHead;
