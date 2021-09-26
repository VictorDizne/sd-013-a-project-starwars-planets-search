import PropTypes from 'prop-types';
import React from 'react';

function Tr({ value }) {
  return (
    <tr>
      {Object.values(value).map((item, index) => <td key={ index }>{item}</td>)}
    </tr>
  );
}

Tr.propTypes = {
  value: PropTypes.string,
}.isRequired;

export default Tr;
