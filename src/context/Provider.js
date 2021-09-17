import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ContextSwapi from './ContextSwapi';

const initialState = {
  filters:
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column: '',
          comparison: '',
          value: '',
        },
      ],
    },
};

function Provider({ children }) {
  const [swapi, setSwapi] = useState(initialState);
  return (
    <ContextSwapi.Provider value={ { ...swapi } }>
      {children}
    </ContextSwapi.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
