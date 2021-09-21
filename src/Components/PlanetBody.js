import React from 'react';
import PropTypes from 'prop-types';

const PlanetBody = ({
  planet: {
    name,
    rotation_period: rotationPeriod,
    orbital_period: orbitalPeriod,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water: surfaceWater,
    population,
    films,
    created,
    edited,
  },
}) => (
  <tr>
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
    <td>{created}</td>
    <td>{edited}</td>

  </tr>
);

const { shape, string } = PropTypes;

PlanetBody.propTypes = {
  planet: shape({
    climate: string,
    created: string,
    diameter: string,
    edited: string,
    films: string,
    gravity: string,
    name: string,
    orbital_period: string,
    population: string,
    residents: string,
    rotation_period: string,
    surface_water: string,
    terrain: string,
    url: string,
  }).isRequired,
};
// codigo (De Guilherme Rodrigues B, vindo de Leonardo Santos A)

export default PlanetBody;
