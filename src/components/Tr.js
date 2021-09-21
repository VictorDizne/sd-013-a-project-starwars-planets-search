import PropTypes from 'prop-types';
import React from 'react';

function Tr({ data }) {
  return (
    <tr>
      { Object.values(data).map((value, index) => <td key={ index }>{value}</td>) }
    </tr>
  );
}

Tr.propTypes = {
  data: PropTypes.string,
}.isRequired;

export default Tr;
