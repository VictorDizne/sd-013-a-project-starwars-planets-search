import React from 'react';
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

export default SWProvider;
