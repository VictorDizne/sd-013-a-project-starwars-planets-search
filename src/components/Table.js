import React, { useContext, useEffect, useState } from 'react';
import TableContext from '../context/TableContext';

function Table() {
  const { data: { results }, loading } = useContext(TableContext);
  const [planetsInfo, setPlanetsInfo] = useState([]);

  useEffect(() => {
    const getPlanetsInfo = () => {
      if (results[0]) {
        const filteredPlanets = results.map((planet) => {
          delete planet.residents;
          return ({ ...planet });
        });
        setPlanetsInfo(filteredPlanets);
      }
    };
    getPlanetsInfo();
  }, [results]);

  const renderPlanetRow = () => (
    planetsInfo.map((planet) => {
      const plantetInfos = Object.values(planet);
      return (
        <tr key={ planet.name }>
          {plantetInfos.map((info) => <td key={ info }>{info}</td>)}
        </tr>);
    })

  );

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {planetsInfo[0] && (
        <table>
          <thead>
            <tr>
              {Object.keys(planetsInfo[0]).map((info) => <th key={ info }>{info}</th>)}
            </tr>
          </thead>
          <tbody>
            {renderPlanetRow()}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
