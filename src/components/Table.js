import React, { useContext } from 'react';
import myContext from '../context/Context';

const Table = () => {
  const { data } = useContext(myContext);
  const columnHead = Object.keys([0]);
  const header = columnHead.map((tagColumnHead, index) => (
    <th key={ index }>
      { tagColumnHead }
    </th>
  ));

  const body = data.map((results, index) => {
    const result = Object.values(results);
    return (
      <tr key={ index }>
        { result.map((planetEntry) => <td key={ planetEntry }>{ planetEntry }</td>)}
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
