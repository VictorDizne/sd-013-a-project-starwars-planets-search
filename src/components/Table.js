import React, { useContext } from 'react';
import Context from '../context/Context';

const Table = () => {
  const { data, filters: { filterByName: { name },
    filterByNumericValues: [{ column, comparison, value }] } } = useContext(Context);
  // filters precisa ser armazenado;
  // const header = { data };
  // Utiliza-se { filterByName: { name } }" para salvar campo updateColumnComparison
  // Adiciona-se filterByNumericValues: [{ column, comparison, value }]
  const columnHead = Object.keys(data[0]);
  const header = columnHead.map((tagColumnHead, index) => (
    <th key={ index }>
      { tagColumnHead }
    </th>
  ));

  const inputName = name.toLocaleLowerCase(); // converter para minúsculas
  const filterData = data.filter((PlanetInfo) => PlanetInfo.name.includes(inputName));

  const selectFilter = () => {
    if (comparison === 'maior que') {
      return filterData.filter((PlanetInfo) => Number(PlanetInfo[column]) > value);
    }
    if (comparison === 'menor que') {
      return filterData.filter((PlanetInfo) => Number(PlanetInfo[column]) < value);
    }
    if (comparison === 'igual a') {
      return filterData.filter((PlanetInfo) => PlanetInfo[column] === value);
    }
  };


  const body = selectFilter().map((results, index) => { // exibe novo array
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

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
// Source: consulta ao repositório da Elaine - turma13A
// Source: auxílio do Lima Lima
