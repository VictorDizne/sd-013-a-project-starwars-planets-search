import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const { useData } = useContext(MyContext);
  // console.log(useData);

  if (useData === undefined) return <p>Loading...</p>;
  return (
    <div>
      <table>
        <thead>
          {
            Object.keys(useData[0]).map((planet, index) => (
              <th key={ index }>{planet}</th>))
          }
        </thead>
      </table>
    </div>
  );
}

export default Table;
