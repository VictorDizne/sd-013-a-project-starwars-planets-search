import React from 'react';
import PropTypes from 'prop-types';

const TableRender = ({ data }) => (

  <tr>
    <td data-testid="planet-name">{data.name}</td>
    <td>{data.rotation_period}</td>
    <td>{data.orbital_period}</td>
    <td>{data.diameter}</td>
    <td>{data.climate}</td>
    <td>{data.gravity}</td>
    <td>{data.terrain}</td>
    <td>{data.surface_water }</td>
    <td>{data.population}</td>
    <td>
      {/* https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/a */}
      {data.residents.map((resident, index) => (
        <a key={ index } href={ resident }>
          {`Person ${index + 1}`}
        </a>
      ))}

    </td>
    <td>
      {data.films.map((film, index) => (
        <a key={ index } href={ film }>
          {`film ${index + 1}`}
        </a>
      ))}
    </td>
    <td>{data.created}</td>
    <td>{data.edited}</td>
  </tr>
);

TableRender.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    rotation_period: PropTypes.string,
    orbital_period: PropTypes.string,
    diameter: PropTypes.string,
    climate: PropTypes.string,
    gravity: PropTypes.string,
    terrain: PropTypes.string,
    surface_water: PropTypes.string,
    population: PropTypes.string,
    residents: PropTypes.arrayOf(PropTypes.string),
    films: PropTypes.arrayOf(PropTypes.string),
    created: PropTypes.string,
    edited: PropTypes.string,
  }).isRequired,
};

export default TableRender;
