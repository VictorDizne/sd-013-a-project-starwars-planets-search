/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const TableData = (
  { data:
  { name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity, terrain,
    surface_water,
    population,
    films,
    created,
    edited, url } },
) => (
  <tr>
    <td>{name}</td>
    <td>{rotation_period}</td>
    <td>{orbital_period}</td>
    <td>{diameter}</td>
    <td>{climate}</td>
    <td>{gravity}</td>
    <td>{terrain}</td>
    <td>{surface_water}</td>
    <td>{population}</td>
    <td>{films}</td>
    <td>{created}</td>
    <td>{edited}</td>
    <td>{url}</td>
  </tr>
);

TableData.propTypes = {
  data: PropTypes.objectOf(PropTypes.oneOfType(
    PropTypes.string,
    PropTypes.array,
  )).isRequired,
};

export default TableData;
