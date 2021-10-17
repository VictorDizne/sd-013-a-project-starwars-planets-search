import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';
import Planets from './Planets';
// import usePlanets from '../hooks/usePlanets';

function Table() {
  const { planets, planetsKeys } = useContext(planetsContext);

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
