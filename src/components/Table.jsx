import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import Planets from './Planets';

function Table() {
  const { planets, planetsKeys } = useContext(MyContext);

  return (
    <div className="table-box">
      <table className="table">
        <thead className="tb-header">
          <tr className="tb-row">
            { planetsKeys.map((key) => (
              <th key={ key } name={ key }>{ key }</th>
            )) }
          </tr>
        </thead>
        <tbody className="tb-body">
          <Planets planets={ planets } />
        </tbody>
      </table>
    </div>
  );
}

export default Table;
