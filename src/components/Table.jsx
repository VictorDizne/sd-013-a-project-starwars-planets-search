import React, { useContext } from 'react';
import dataContext from '../context/createContext';
import ShoudBeFiltered from './filters';
import FilterInputs from './FilterInputs';

function Table() {
  const { data } = useContext(dataContext);

  const firstTableRule = Object.keys(data.data.results[0]);
  const removeIndex = 9;
  firstTableRule.splice(removeIndex, 1);

  return (
    <div>
      <FilterInputs />
      <table border="1">
        <tr>{firstTableRule.map((item) => <th key={ item }>{ item }</th>)}</tr>
        <ShoudBeFiltered />
      </table>
    </div>
  );
}

export default Table;
