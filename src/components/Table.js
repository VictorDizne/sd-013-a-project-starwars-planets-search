// consulta para lembrar de como faz tabela - https://www.w3schools.com/tags/tag_thead.asp
import React, { useContext } from 'react';
import Context from '../context/Context';

function Table() {
  const { data } = useContext(Context);
  const head = Object.keys(data[0]);
  const header = head.map((tagHead, index) => {
    // fazer if/else para aparecer a tabela se for diferente de "residents" se nao retorna vazio "null"
    if (tagHead !== 'residents') {
      return <th key={ index }>{ tagHead }</th>;
    }
    return null;
  });

  const body = data.map((results, index) => {
    if (results !== 'residents') {
      const result = Object.values(results);
      return (
        <tr key={ index }>
          { result.map((planetEntrie) => <td key={ planetEntrie }>{ planetEntrie }</td>)}
        </tr>
      );
    }
    return null;
  });

  return (
    <table>
      {/*  */}
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
