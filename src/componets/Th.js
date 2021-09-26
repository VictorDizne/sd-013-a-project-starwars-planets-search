import PropTypes from 'prop-types';
import React from 'react';

function Th({ title }) {
  return (
    <th>
      {title}
    </th>
  );
}

Th.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default Th;
