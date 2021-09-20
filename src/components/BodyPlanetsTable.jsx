import React, { useContext } from 'react';
import SearchNameContext from '../contextAPI/SearchNameContext';
import PlanetsContext from '../contextAPI/SWContext';

function BodyPlanetsTable() {
  const { planets, isLoading } = useContext(PlanetsContext);
  const { filters: { filterByName:
    { name: searchByName } } } = useContext(SearchNameContext);
  return (
    <tbody>
      { isLoading ? null
        : planets.filter((planet) => planet.name.toLowerCase().includes(searchByName))
          .map((planet, index) => (
            <tr key={ `${planet.name + index}` }>
              {Object.values(planet).map((data, key) => (
                <td key={ `${planet.created + key}` }>{ data }</td>))}
            </tr>
          ))}
    </tbody>
  );
}

export default BodyPlanetsTable;
