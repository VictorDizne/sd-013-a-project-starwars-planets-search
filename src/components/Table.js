import React, { useContext } from 'react';
import StarWarsContext from './StarWarsContext';
import Loading from './Loading';

const Table = () => {
  const { key, filteredData, isFetching } = useContext(StarWarsContext);

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
        {filteredData
          .map((item, index) => (
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
    <main>
      <Loading />
      {!isFetching && tableElement}
    </main>
  );
};

export default Table;
