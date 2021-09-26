import React, { useState } from 'react';
import PropTypes from 'prop-types';
import context from './Context';

function Provider(props) {
  const [item, setItem] = useState([]);
  const { children } = props;
  const contextValue = { item, setItem };

  return (
    <context.Provider value={ contextValue }>
      { children }
    </context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
