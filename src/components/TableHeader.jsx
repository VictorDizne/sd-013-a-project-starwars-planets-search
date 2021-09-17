import React, { useContext } from 'react';
import myContext from '../context';

function TableHeader() {
  const contextValue = useContext(myContext).data;
  const headerTitle = contextValue[1];

  return (
    <thead>
      <tr>
        {
          Object.keys(headerTitle)
            .map((title, index) => (
              <th key={ index }>
                {title}
              </th>
            ))
        }
      </tr>
    </thead>
  );
}

export default TableHeader;
