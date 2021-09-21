// https://blog.betrybe.com/javascript/javascript-map/
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// https://pt-br.reactjs.org/docs/hooks-reference.html#usecontext
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
import React, { useContext } from 'react';
import Context from '../context/Context';

function Table() {
  const { dataPlanets } = useContext(Context);
  const head = Object.keys(dataPlanets[0]);
  const header = head.map((headIndex, index) => {
    if (headIndex !== 'residents') {
      return <th key={ index }>{ headIndex }</th>;
    }
    return null;
  });
  // const body = dataPlanets.map((results, index) => {
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
