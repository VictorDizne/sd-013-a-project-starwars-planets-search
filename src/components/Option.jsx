import PropTypes from 'prop-types';
import React from 'react';
// import dataContext from '../context/createContext';

function Option({ text, onChange }) {
  // const setDisplay = () => {
  //   if (filterByNumericValues.length === 0 && text === newState.column) {
  //     return { display: 'none' };
  //   }
  //   if (filterByNumericValues.length > 0) {
  //     const lastIndex = filterByNumericValues.length - 1;
  //     if (filterByNumericValues[lastIndex].column === text) {
  //       return { display: 'none' };
  //     }
  //   }
  //   return { display: 'block' };
  // };
  return (
    <option
      // style={ setDisplay() }
      name={ text }
      value={ text }
      onChange={ onChange }
    >
      {text}
    </option>);
}

Option.propTypes = {
  onChange: PropTypes.func,
  text: PropTypes.string,
}.isRequired;
export default Option;
