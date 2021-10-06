import React, { useContext, useState, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const oneless = -1;

const Planets = () => {
  const { planets, filters } = useContext(PlanetsContext);
  const [newPlanets, setNewPlanets] = useState([]);

  const filteredPlanets = (
    { filterByName, order, filterByNumericValues }, defaultPlanets,
  ) => {
    const { name } = filterByName;
    const { column, sort } = order;

    let newArrayPlanets = defaultPlanets.filter((planet) => (
      planet.name.includes(name)
    ));

    filterByNumericValues.forEach((filter) => {
      newArrayPlanets = newArrayPlanets.filter((planet) => {
        if (filter.comparison === 'bigger than') {
          return parseInt(planet[filter.column], 10) > parseInt(filter.value, 10);
        }
        if (filter.comparison === 'bigger than') {
          return parseInt(planet[filter.column], 10) < parseInt(filter.value, 10);
        }
        return planet[filter.column] === filter.value;
      });
    });
    newArrayPlanets.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return oneless;
      return 0;
    });

    if (column !== 'name') {
      newArrayPlanets.sort((a, b) => parseInt(a[column], 10) - parseInt(b[column], 10));
    }

    if (sort === 'DESC') {
      newArrayPlanets.reverse();
      // source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
    }

    return newArrayPlanets;
  };

  useEffect(() => {
    setNewPlanets(filteredPlanets(filters, planets));
  }, [filters, planets]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Movies</th>
            <th>Created</th>
            <th>Edited</th>
          </tr>
        </thead>
        <tbody>
          { newPlanets.map(({ name, rotation_period: rotationPeriod,
            orbital_period: orbitalPeriod, diameter, climate, gravity, terrain,
            surface_water: surfaceWater, population, films, created, edited },
          id) => (
            <tr key={ name }>
              <td>{ id + 1 }</td>
              <td data-testid="planet-name">{name}</td>
              <td>{rotationPeriod}</td>
              <td>{orbitalPeriod}</td>
              <td>{diameter}</td>
              <td>{climate}</td>
              <td>{gravity}</td>
              <td>{terrain}</td>
              <td>{surfaceWater}</td>
              <td>{population}</td>
              <td>{films}</td>
              <td>{created.split('T')[0]}</td>
              <td>{edited.split('T')[0]}</td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
};

export default Planets;
