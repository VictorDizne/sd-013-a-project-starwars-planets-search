import React, { useContext } from 'react';
import starWarsContext from '../Context';

function TableHead() {
  const { data } = useContext(starWarsContext);
  // This turns the object into an array
  const dataEntries = Object.entries(data);
  // This fetches the planet properties informed by the API within the array
  // made above
  const titleArray = Object.keys(dataEntries[0][1]);
  return (
    <thead>
      <tr>
        { titleArray.map((title, index) => {
          if (title !== 'residents') return <th key={ index }><h3>{ title }</h3></th>;
          return null;
        })}
      </tr>
    </thead>
  );
}

export default TableHead;
