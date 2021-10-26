import React from 'react';
import PropTypes from 'prop-types';

export default function Tr({ allData }) {
  return (
    <tr>
      { Object.values(allData).map((value) => <td key={ value }>{ value }</td>) }
    </tr>
  );
}

Tr.propTypes = {
  allData: PropTypes.shape(),
}.isRequired;
