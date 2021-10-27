import React, { useContext } from 'react';
import Context from '../context';

function TablePlanets() {
  const {
    filteredData,
    isLoading,
    filters: { filterByName: { name } },
  } = useContext(Context);

  /* const getFilmsName = (num, filmName) => {
    switch(num) {
      case '1/':
        filmName = 'A New Hope';
        break;

      case '2/':
        filmName = 'The Empire Strikes Back';
        break;

      case '3/':
        filmName = 'Return of the Jedi';
        break;

      case '4/':
        filmName = 'The Phantom Menace';
        break;

      case '1/':
        filmName = 'Attack of the Clones';
        break;

     case '6/':
        filmName = 'Revenge of the Sith';
        break;

      default:
        return filmName;
    }
  } */

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }
  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>Climate</th>
            <th>Created</th>
            <th>Diameter</th>
            <th>Edited</th>
            <th>Films</th>
            <th>Gravity</th>
            <th>Name</th>
            <th>Orbital Period</th>
            <th>Population</th>
            <th>Residents</th>
            <th>Rotation Period</th>
            <th>Surface Water</th>
            <th>Terrain</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.filter((result) => result.name.includes(name))
            .map((result) => (
              <tr key={ result.name }>
                <td>{result.climate}</td>
                <td>{result.created}</td>
                <td>{result.diameter}</td>
                <td>{result.edited}</td>
                <td>{result.films}</td>
                <td>{result.gravity}</td>
                <td>{result.name}</td>
                <td>{result.orbital_period}</td>
                <td>{result.population}</td>
                <td>{result.population}</td>
                <td>{result.residents}</td>
                <td>{result.rotation_period}</td>
                <td>{result.surface_water}</td>
                <td>{result.terrain}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
}

//

export default TablePlanets;
