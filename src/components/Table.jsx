import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import Planets from './Planets';

function Table() {
  const { planets, planetsKeys } = useContext(MyContext);

  return (
    <div className="table-container">
      <table className="table">
        <thead className="table-head">
          <tr className="thead-row">
            {planetsKeys.map((key) => (
              <th key={ key } name={ key }>{ key }</th>
            ))}
          </tr>
        </thead>
        <tbody className="table-body">
          <Planets
            planets={ planets }
          />
        </tbody>
      </table>
    </div>
  );
}

export default Table;
