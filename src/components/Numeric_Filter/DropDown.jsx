// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import { htmlID } from '../../util';

// const DropDown = ({ options, testid, onChange, state }) => {
//   console.log('Rendering DropDown');
//   return (

//     <select data-testid={ testid } onChange={ onChange } value={ state }>
//       {options.map((name, index) => (
//         <option key={ htmlID({ name }) } value={ name }>{ name }</option>)) }
//     </select>
//   );
// };

// DropDown.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.String).isRequired,
//   testid: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
// };

// export default DropDown;
