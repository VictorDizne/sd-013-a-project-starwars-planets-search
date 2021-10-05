import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Option from './Option';
import dataContext from '../context/createContext';

export const options = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function SelectColumn({ onChange, id }) {
  const { filters } = useContext(dataContext);
  const { filterByNumericValues } = filters;
  const lastIndex = filterByNumericValues.length - 1;
  const verifyLength = () => {
    if (filterByNumericValues.length > 0) {
      const renderOptions = options
        .filter((option) => option !== filterByNumericValues[lastIndex].column)
        .map((option) => (<Option text={ option } key={ option } />));
      return renderOptions;
    } if (filterByNumericValues.length === 0) {
      const renderOptions = options
        .map((option) => (<Option text={ option } key={ option } />));
      return renderOptions;
    }
  };

  return (
    <select data-testid="column-filter" id={ id } onChange={ onChange }>
      {verifyLength()}
    </select>
  );
}

const { string } = PropTypes;

SelectColumn.propTypes = {
  name: string,
}.isRequired;

export default SelectColumn;
