import React, { useContext } from 'react';
import Context from './mycontext';

const Table = () => {
  const { data } = useContext(Context);

  if (data.length !== 0) {
    return (
      <table>
        <tr>
          { Object.keys(data[0]).map((key) => <th key={ key }>{key}</th>) }
        </tr>
        { Object.values(data).map((planet) => (
          <tr key={ planet.name }>
            <td>{ planet.name }</td>
            <td>{ planet.rotation_period }</td>
            <td>{ planet.orbital_period }</td>
            <td>{ planet.diameter }</td>
            <td>{ planet.climate }</td>
            <td>{ planet.gravity }</td>
            <td>{ planet.terrain }</td>
            <td>{ planet.surface_water }</td>
            <td>{ planet.population }</td>
            <td>
              {
                planet.films.map((film) => {
                  switch (film) {
                  case 'https://swapi-trybe.herokuapp.com/api/films/1/':
                    return 'A New Hope, ';
                  case 'https://swapi-trybe.herokuapp.com/api/films/2/':
                    return 'The Empire Strikes Back, ';
                  case 'https://swapi-trybe.herokuapp.com/api/films/3/':
                    return 'Return of the jedi, ';
                  case 'https://swapi-trybe.herokuapp.com/api/films/4/':
                    return 'The Phantom Menace, ';
                  case 'https://swapi-trybe.herokuapp.com/api/films/5/':
                    return 'Attack of the Clones, ';
                  case 'https://swapi-trybe.herokuapp.com/api/films/6/':
                    return 'Revenge of the Sith, ';
                  default:
                    return 'error';
                  }
                })
              }
            </td>
            <td>{ planet.created }</td>
            <td>{ planet.edited }</td>
            <td><a href={ planet.url }>{ planet.url }</a></td>
          </tr>)) }
      </table>
    );
  }
  return <h1>Loading...</h1>;
};

export default Table;
