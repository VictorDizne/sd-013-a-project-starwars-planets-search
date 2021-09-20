import React from 'react';
import PropTypes from 'prop-types';

const Planet = ({
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
    url,
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
    <td>{url}</td>

  </tr>
);

const { shape, string } = PropTypes;

Planet.propTypes = {
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

export default Planet;
// Código do meu mano Leonardo Santos (O mais brabo!!!)
