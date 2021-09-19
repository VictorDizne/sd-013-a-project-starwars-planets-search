import React, { useContext, useState, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const oneless = -1;

const Planets = () => {
  const { planets, filters } = useContext(PlanetsContext);
  const [newPlanets, setNewPlanets] = useState([]);

  const filteredPlanets = ({ filterByName }, defaultPlanets) => {
    const { name } = filterByName;
    const newArrayPlanets = defaultPlanets.filter((planet) => (
      planet.name.includes(name)
    ));

    newArrayPlanets.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return oneless;
      return 0;
    });
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
              <td>{name}</td>
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
