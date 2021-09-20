import React from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import usePlanets from '../Hooks/fetchHook';

function Provider({ children }) {
  const { planets, setPlanets, titles } = usePlanets();

  const contextValue = {
    planets,
    setPlanets,
    titles,
  };

  return (
    <MyContext.Provider value={ contextValue } displayName="Context Display Name">
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
