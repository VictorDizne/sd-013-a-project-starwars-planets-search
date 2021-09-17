import React from 'react';
import PropTypes from 'prop-types';

export default function TableRow({ planet }) {
  return (
    <tr>
      { Object.entries(planet).map((info, index) => {
        if (info[0] !== 'residents') {
          return (
            <td data-testid={ `planet-${info[0]}` } key={ index }>{info[1]}</td>
          );
        }
        return null;
      })}
    </tr>
  );
}

TableRow.propTypes = {
  planet: PropTypes.shape({}).isRequired,
};
