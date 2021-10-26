import React, { useContext } from 'react';
import Context from '../context/Context';

const Table = () => {
  const { data, filters: { filterByName: { name } } } = useContext(Context);
  // filters precisa ser armazenado;
  // const header = { data };
  const columnHead = Object.keys(data[0]);
  const header = columnHead.map((tagColumnHead, index) => (
    <th key={ index }>
      { tagColumnHead }
    </th>
  ));
  console.log(data);

  const inputName = name.toLocaleLowerCase();

  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase

  const filterData = data.filter((PlanetInfo) => PlanetInfo.name.includes(inputName));

  const body = filterData.map((results, index) => { // exibe novo array
    const result = Object.entries(results); // retorna array do map
    return (
      <tr key={ index }>
        { result.map((planetEntry) => {
          if (planetEntry[0] !== inputName) {
            return (
              <td key={ planetEntry[1] }>{ planetEntry[1] }</td>
            );
          }
          return null;
        })}
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          { header }
        </tr>
      </thead>
      <tbody>
        { body }
      </tbody>
    </table>
  );
};

export default Table;

// Source: consulta ao repositório da Elaine - turma13A
// Source: auxílio do Lima Lima
