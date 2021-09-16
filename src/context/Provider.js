import React from 'react';
import PropTypes from 'prop-types';
import useFetchAPI from '../hooks/useFetchAPI';
import Context from './Context';

function Provider({ children }) {
  const [data, loading] = useFetchAPI();

  const value = {
    data,
    loading,
  };

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
