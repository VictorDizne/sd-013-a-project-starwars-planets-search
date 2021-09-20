import React from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './SWContext';
import useFetchSW from '../hooks/useFetchSW';

function SWProvider({ children }) {
  const [planets, isLoading] = useFetchSW();
  const contextValue = {
    planets,
    isLoading,
  };
  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

SWProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SWProvider;
