import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function TableContent() {
  const { data: { results }, filter } = useContext(TableContext);

  const renderPlanetRow = () => {
    const { filters: { filterByName: { name: filterName } } } = filter;
    const filteredPlanets = results
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
    <table>
      <thead>
        <tr>
          {Object.keys(results[0]).map((info) => <th key={ info }>{info}</th>)}
        </tr>
      </thead>
      <tbody>
        {renderPlanetRow()}
      </tbody>
    </table>
  );
}

export default TableContent;
