import React, { useContext } from 'react';
import StarWarsContext from './StarWarsContext';
import Loading from './Loading';

const Table = () => {
  const { tableHeader, filteredData, isFetching } = useContext(StarWarsContext);

  const tableElement = (
    <table>
      <thead>
        <tr>
          {tableHeader.map((el, i) => (
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
    <section>
      <Loading />
      {!isFetching && tableElement}
    </section>
  );
};

export default Table;
