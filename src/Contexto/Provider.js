import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MyContext from './MyContext';
import useFetchPlanets from '../Hooks/useFetchPlanets';

function Provider({ children }) {
  const { planets, setPlanets, heads } = useFetchPlanets();
  const [nameFilter, setNameFilter] = useState('');

  const handleChange = ({ target: { value } }) => {
    setNameFilter(value);
  };
  const contextValue = {
    planets,
    setPlanets,
    heads,
    nameFilter,
    handleChange,
  };
  return (
    <MyContext.Provider value={ contextValue } displayName="Context Display Name">
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf.isRequired,
};

export default Provider;
