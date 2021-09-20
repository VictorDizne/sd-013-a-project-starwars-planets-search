import React, { useContext } from 'react';
import dataContext from '../context/createContext';

function FilteredByName() {
  const { data, filters } = useContext(dataContext);
  const { filterByName: { name } } = filters;

  function factoryFilteredByName() {
    return data.map((planet, i) => {
      const planetInfs = Object.values(planet);
      const removeIndex = 9;
      planetInfs.splice(removeIndex, 1);

      const matchPlanet = planetInfs[0].match(name);

      if (matchPlanet) {
        return (
          <tr key={ i }>
            {planetInfs.map((planetInf, ind) => (
              <td key={ `${planetInf[0]} ${ind}` }>
                {planetInf}
              </td>))}
          </tr>);
      }
      return null;
    });
  }

  return factoryFilteredByName();
}

export default FilteredByName;
