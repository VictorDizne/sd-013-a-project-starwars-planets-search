import React from 'react';
import PropTypes from 'prop-types';
import Context from './index';
import useFetch from '../hooks/useFetch';

function Provider({ children }) {
  const data = useFetch();

  const valueState = {
    data,
  };

  return (
    <Context.Provider value={ valueState }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = ({
  children: PropTypes.func.isRequired,
});

export default Provider;
