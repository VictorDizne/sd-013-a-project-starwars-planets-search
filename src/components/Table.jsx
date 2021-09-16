import React, { useContext } from 'react';
import dataContext from '../context/createContext';

function Table() {
  const { data } = useContext(dataContext);

    const firstTableRule = Object.keys(data.data.results[0]);
    firstTableRule.splice(9,1);
    
    function generateContent() {
      const TableContent = data.data.results;
     
      return TableContent.map((result) => {
        const planet = Object.values(result);
        planet.splice(9,1);
        return <tr>{planet.map((item) => <td>{item}</td>)}</tr>
      })
    }

 
  return (
    <table border='1'>
      {<tr>{firstTableRule.map((item) => <th>{ item }</th>)}</tr>}
      {generateContent()}
    </table>
  )
}

export default Table;
