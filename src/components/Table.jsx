import React, { useContext } from 'react';
import dataContext from '../context/createContext';
import FilteredByName from './filters';
import FilterInputs from './FilterInputs';
import RenderFilterList from './filterList';

function Table() {
  const { data } = useContext(dataContext);

  const firsTableRule = () => {
    const firstTableRule = Object.keys(data[0]);
    const removeIndex = 9;
    if (firstTableRule[removeIndex] === 'residents') {
      firstTableRule.splice(removeIndex, 1);
    }

    return (
      <tr key="table header">
        {firstTableRule.map((item, i) => (
          <th key={ `${item} 00${i}` }>
            { item }
          </th>))}
      </tr>
    );
  };

  return (
    <div>
      <FilterInputs />
      {RenderFilterList()}
      <table border="1">

        {firsTableRule()}
        <FilteredByName />

      </table>
    </div>
  );
}

export default Table;
