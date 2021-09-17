import React, { useContext } from 'react';
import StarWarsContext from './StarWarsContext';

const Table = () => {
  const { key, data, isFetching } = useContext(StarWarsContext);
  console.log(key);
  const tableElement = (
    <table>
      <thead>
        <tr>
          {key.map((el, i) => (
            <th
              key={ i }
            >
              {el}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={ index }
          >
            {Object.values(item).map((el, i) => (
              <td
                key={ i }
              >
                {el}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
  return (
    // <h1>olá</h1>
    !isFetching && tableElement
  );
};

export default Table;
