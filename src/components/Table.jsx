import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';
import Planets from './Planets';
// import usePlanets from '../hooks/usePlanets';

function Table() {
  const { planets, planetsKeys } = useContext(planetsContext);

  return (
    <table>
      <thead>
        <tr>
          {planetsKeys.map((key) => (
            <th key={ key } name={ key }>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <Planets planets={ planets } />
      </tbody>
    </table>
  );
}

export default Table;
