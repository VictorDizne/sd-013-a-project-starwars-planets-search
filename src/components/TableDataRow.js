import React from 'react';
import PropTypes from 'prop-types';

function TableDataRow({ data }) {
  return (
    <tbody>
      {data.map((current, index) => (
        <tr key={ index }>
          <td data-testid="planet-name">{current.name}</td>
          <td>{current.rotation_period}</td>
          <td>{current.orbital_period}</td>
          <td>{current.diameter}</td>
          <td>{current.climate}</td>
          <td>{current.gravity}</td>
          <td>{current.terrain}</td>
          <td>{current.surface_water}</td>
          <td>{current.population}</td>
          <td>{current.films}</td>
          <td>{current.created}</td>
          <td>{current.edited}</td>
          <td>{current.url}</td>
        </tr>
      ))}
    </tbody>
  );
}

TableDataRow.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    rotation_period: PropTypes.string.isRequired,
    orbital_period: PropTypes.string.isRequired,
    diameter: PropTypes.string.isRequired,
    climate: PropTypes.string.isRequired,
    gravity: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    surface_water: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    films: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    created: PropTypes.string.isRequired,
    edited: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
};

export default TableDataRow;
