import React, { useContext } from 'react';
import myContext from '../context';

function TableContent() {
  const contextValue = useContext(myContext).data;
  return (
    <tbody>
      {
        contextValue
          .map((value, index) => (
            <tr key={ index }>
              {
                Object.values(value)
                  .map((data) => (
                    <td key={ data }>
                      { data }
                    </td>))
              }
            </tr>
          ))
      }
    </tbody>
  );
}

export default TableContent;
