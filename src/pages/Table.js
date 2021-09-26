import React, { useContext, useEffect } from 'react';
import NumericFilters from '../components/NumericFilters';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const {
    data,
    loading,
    handleFilterName,
    filter,
    setFilteredPlanets,
    planetsInfo,
    setPlanetsInfo } = useContext(PlanetsContext);

  useEffect(() => {
    const deleteInfo = () => {
      if (data[0]) {
        const deleteResidents = data.map((planet) => {
          delete planet.residents;
          return ({ ...planet });
        });
        setPlanetsInfo(deleteResidents);
        setFilteredPlanets(deleteResidents);
      }
    };
    deleteInfo();
  }, [data, setFilteredPlanets, setPlanetsInfo]);

  const renderHeader = () => {
    const titleInfo = Object.keys(planetsInfo[0]).map((infoHeader) => (
      <th key={ infoHeader }>
        { infoHeader }
      </th>));
    return titleInfo;
  };

  const renderInfoPlanetByName = () => {
    const { filters: { filterByName: { name: filterName } } } = filter;
    const filteredPlanets = planetsInfo
      .filter(({ name }) => name.toLowerCase().includes(filterName));
    return filteredPlanets.map((planet) => {
      const infoPlanets = Object.values(planet);
      return (
        <tr key={ planet.name }>
          {infoPlanets.map((info) => <td key={ info }>{info}</td>)}
        </tr>);
    });
  };

  return (
    <div>
      { loading && <span>Loading...</span>}
      {planetsInfo[0] && (
        <div>
          <label
            htmlFor="input-name"
          >
            Name:
            <input
              type="text"
              data-testid="name-filter"
              id="input-name"
              onChange={ (event) => handleFilterName(event.target.value) }
            />
          </label>
          <NumericFilters />
          <table>
            <thead>
              <tr>
                {renderHeader()}
              </tr>
            </thead>
            <tbody>
              {renderInfoPlanetByName()}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Table;
