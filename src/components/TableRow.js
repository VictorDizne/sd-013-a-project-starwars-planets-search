import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ data }) => {
  const { name, population, climate, terrain, gravity, diameter,
    surface_water: surfaceWater, rotation_period: rotationPeriod,
    orbital_period: orbitalPeriod, residents, films, created, edited } = data;

  return (
    <tr>
      <td data-testid="planet-name">{name}</td>
      <td>{rotationPeriod}</td>
      <td>{orbitalPeriod}</td>
      <td>{diameter}</td>
      <td>{climate}</td>
      <td>{gravity}</td>
      <td>{terrain}</td>
      <td>{ surfaceWater }</td>
      <td>{population}</td>
      <td>
        {residents.map((resident, index) => (
          <a key={ index } href={ resident }>
            {`Person ${index + 1}`}
          </a>
        ))}

      </td>
      <td>
        {films.map((film, index) => (
          <a key={ index } href={ film }>
            {`film ${index + 1}`}
          </a>
        ))}
      </td>
      <td>{created}</td>
      <td>{edited}</td>
    </tr>
  );
};

TableRow.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    population: PropTypes.string,
    climate: PropTypes.string,
    terrain: PropTypes.string,
    gravity: PropTypes.string,
    diameter: PropTypes.string,
    surface_water: PropTypes.string,
    rotation_period: PropTypes.string,
    orbital_period: PropTypes.string,
    residents: PropTypes.arrayOf(PropTypes.string),
    films: PropTypes.arrayOf(PropTypes.string),
    created: PropTypes.string,
    edited: PropTypes.string,
  }).isRequired,
};

export default TableRow;
