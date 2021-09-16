import React, { useContext, useEffect, useState } from 'react';
import TableContext from './tableContext';

function Table() {
  const {
    data: { results },
    loading,
    handleFilterByName,
    filter,
  } = useContext(TableContext);
  const [planetsInfo, setPlanetsInfo] = useState([]);

  useEffect(() => {
    const getPlanetsInfo = () => {
      if (results[0]) {
        const planets = results.map((planet) => {
          delete planet.residents;
          return ({ ...planet });
        });
        setPlanetsInfo(planets);
      }
    };
    getPlanetsInfo();
  }, [results]);

  const renderPlanetRow = () => {
    const { filters: { filterByName: { name: filterName } } } = filter;
    const filteredPlanets = planetsInfo
      .filter(({ name }) => name.toLowerCase().includes(filterName));
    return filteredPlanets.map((planet) => {
      const plantetInfos = Object.values(planet);
      return (
        <tr key={ planet.name }>
          {plantetInfos.map((info) => <td key={ info }>{info}</td>)}
        </tr>);
    });
  };

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {planetsInfo[0] && (
        <>
          <label htmlFor="planet-name">
            Nome:
            <input
              data-testid="name-filter"
              onChange={ (e) => handleFilterByName(e.target.value) }
              type="text"
              id="planet-name"
              placeholder="Eg: Tatooine"
            />
          </label>
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
        </>
      )}
    </div>
  );
}

export default Table;
