import React, { useContext } from 'react';

// importar o contexto para ser usado
import MyContext from '../context/Context';

const Table = () => {
  const { data,
    filters: { filterByName: { name } },
    // filterByNumericValues,
  } = useContext(MyContext);
  //   console.log(datas);

  const headers = data[0] || [];
  // const { collumn, comparison, value } = filterByNumericValues[0];

  return (
    <table>
      <thead>
        <tr>
          {
            Object.keys(headers)
              .map((header, index) => (
                <th key={ index }>
                  {header}
                </th>
              ))
          }
        </tr>
      </thead>

      <tbody>
        {
          data
            .filter((day) => (name ? (day.name).includes(name) : true))
            .map((day, index) => (
              <tr key={ index }>
                {
                  Object.values(day)
                    .map((info) => <td key={ info }>{ info }</td>)
                }
              </tr>
            ))
        }
      </tbody>
    </table>
  );
};

export default Table;

// <thead> Cabeçalho da Tabela;
