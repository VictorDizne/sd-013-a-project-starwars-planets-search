import React, { useContext } from 'react';
import dataContext from '../context/createContext';

function ShoudBeFiltered() {
  const { data: { data: { results } }, filters } = useContext(dataContext);
  const { filterByName: { name } } = filters;

  function generateFilteredContent() {
    return results.map((result) => {
      const planet = Object.values(result);
      const removeIndex = 9;
      planet.splice(removeIndex, 1);

      const matchPlanet = planet[0].match(name);

      if (matchPlanet) {
        return <tr>{planet.map((item, i) => <td key={ planet[i] }>{item}</td>)}</tr>;
      }
      return null;
    });
  }

  return generateFilteredContent();
}

export default ShoudBeFiltered;
