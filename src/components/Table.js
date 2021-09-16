// consulta para lembrar de como faz tabela - https://www.w3schools.com/tags/tag_thead.asp
import React, { useContext } from 'react';
import Context from '../context/Context';

function Table() {
  // usando context pois "filters: { filterByName: { name } }" tem que estar salvo no campo
  const { data, filters: { filterByName: { name } } } = useContext(Context);
  const head = Object.keys(data[0]);
  const header = head.map((tagHead, index) => {
    if (tagHead !== 'residents') {
      return <th key={ index }>{ tagHead }</th>;
    }
    return null;
  });

  // const body = data.map((results, index) => {
  //   if (results !== 'residents') {
  //     const result = Object.values(results);
  //     return (
  //       <tr key={ index }>
  //         { result.map((planetEntrie) => <td key={ planetEntrie }>{ planetEntrie }</td>)}
  //       </tr>
  //     );
  //   }
  //   return null;
  // });

  const inputName = name.toLocaleLowerCase();
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
  // retorna uma nova string que representa a string original so que convertida em minusculas
  // de acordo com qualquer caixa de texto especifico
  const filterData = data.filter((PlanetInfo) => PlanetInfo.name.toLocaleLowerCase()
    .includes(inputName));

  const body = filterData.map((results, index) => { // mostrar na tela um novo array
    const result = Object.entries(results); // para retornar um array do map feito
    return (
      <tr key={ index }>
        { result.map((planetEntry) => {
          if (planetEntry[0] !== 'residents') {
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
}

export default Table;
