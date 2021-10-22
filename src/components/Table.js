import React, { useContext } from 'react';
import Context from '../context/Context';

const Table = () => {
  const { data } = useContext(Context);
  // const header = { data };
  const columnHead = Object.keys(data[0]);
  console.log('columnHead ->', columnHead);
  const header = columnHead.map((tagColumnHead, index) => (
    <th key={ index }>
      { tagColumnHead }
    </th>
  ));

  // const teste = {
  //   data: data,
  // };

  const body = data.map((results, index) => {
    // console.log(results);
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
