import React from 'react';
import PropTypes from 'prop-types';

function TableBody(props) {
  const { planetsList } = props;

  if (!planetsList) return (<h3>Loading...</h3>);

  return (
    <tbody>
      {planetsList.map((i) => (
        <tr key={ i.name }>
          <td>{i.name}</td>
          <td>{i.rotation_period}</td>
          <td>{i.orbital_period}</td>
          <td>{i.diameter}</td>
          <td>{i.climate}</td>
          <td>{i.gravity}</td>
          <td>{i.terrain}</td>
          <td>{i.surface_water}</td>
          <td>{i.population}</td>
          <td>{i.films}</td>
          <td>{i.created}</td>
          <td>{i.edited}</td>
          <td>{i.url}</td>
        </tr>
      ))}
    </tbody>
  );
}

TableBody.propTypes = {
  planetsList: PropTypes.arrayOf(PropTypes.object),
};

TableBody.defaultProps = {
  planetsList: [],
};

export default TableBody;
