import PropTypes from 'prop-types';
import React from 'react';

function Tr({ data }) {
  return (
    <tr>
      { Object.values(data)
        .map((value, index) => (index === 0
          ? (<td key={ index } data-testid="planet-name">{value}</td>)
          : <td key={ index }>{value}</td>)) }
    </tr>
  );
}

Tr.propTypes = {
  data: PropTypes.string,
}.isRequired;

export default Tr;
