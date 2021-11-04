import React from 'react';
import PropTypes from 'prop-types';

export default function Tr({ allData }) {
  return (
    <tr>
      { Object.values(allData).map((value) => <td key={ value }>{ value }</td>) }
    </tr>
  );
}

// retorna o valor de cada linha
// object.values retorna um array com os valores das propriedades de um determinado dado, nesse caso um valor de cada linha

Tr.propTypes = {
  allData: PropTypes.shape(),
}.isRequired;
