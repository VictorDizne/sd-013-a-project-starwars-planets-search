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

const { shape, string, number, arrayOf } = PropTypes;

Planet.propTypes = {
  planet: shape({
    climate: string,
    created: string,
    diameter: string,
    edited: string,
    films: arrayOf(string),
    gravity: string,
    name: string,
    orbital_period: number,
    population: number,
    residents: string,
    rotation_period: number,
    surface_water: number,
    terrain: string,
    url: string,
  }).isRequired,
};

export default Planet;

// Ajuda do Leonardo Santos (meestre)!!!
