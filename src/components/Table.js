import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const [planetsInfo, setPlanetsInfo] = useState([]);
  const { data, loading } = useContext(PlanetsContext);

  useEffect(() => {
    const deleteInfo = () => {
      if (data[0]) {
        const deleteResidents = data.map((planet) => {
          delete planet.residents;
          return ({ ...planet });
        });
        setPlanetsInfo(deleteResidents);
      }
    };
    deleteInfo();
  }, [data]);

  const renderHeader = () => {
    const titleInfo = Object.keys(planetsInfo[0]).map((infoHeader) => (
      <th key={ infoHeader }>
        { infoHeader }
      </th>));
    return titleInfo;
  };

  const renderInfoPlanet = () => (
    planetsInfo.map((planet) => {
      const infoPlanets = Object.values(planet);
      return (
        <tr key={ planet.name }>
          {infoPlanets.map((info) => <td key={ info }>{info}</td>)}
        </tr>);
    })
  );

  const frutas = ['maca', 'banana', 'uva'];

  const render = () => frutas.map((fruta) => <td key={ fruta }>{fruta}</td>);

  return (
    <div>
      { loading && <span>Loading...</span>}
      {planetsInfo[0] && (
        <table>
          <thead>
            <tr>
              {renderHeader()}
            </tr>
          </thead>
          <tbody>
            {renderInfoPlanet()}
          </tbody>
          { render() }
        </table>
      )}
    </div>
  );
}

export default Table;
