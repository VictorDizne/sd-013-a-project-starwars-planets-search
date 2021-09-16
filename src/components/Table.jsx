import React, { useEffect, useState } from 'react';

function Table() {
  const headers = ['climate', 'created', 'diameter', 'edited', 'films', 'gravity',
    'name', 'orbital_period', 'population', 'rotation_period', 'surface_water',
    'terrain', 'url'];
  const [planets, setPlanets] = useState();

  useEffect(() => {
    const API = 'https://swapi-trybe.herokuapp.com/api/planets/';
    async function fetchData() {
      const data = await (await fetch(API)).json();
      const { results } = data;
      setPlanets(results);
    }
    fetchData();
  }, []);

  if (!planets) return <p>Loading...</p>;

  return (
    <table>
      <tr>
        { headers.map((field, index) => <th key={ index }>{ field }</th>) }
      </tr>
      { planets.map((planet) => (
        <tr key={ planet.name }>
          { headers.map((field, index) => <td key={ index }>{ planet[field] }</td>)}
        </tr>))}
    </table>
  );
}

export default Table;
