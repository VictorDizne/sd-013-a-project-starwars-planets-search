import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MyContext from './myContext';
import usePlanets from '../Hooks/useFetch';

function Provider({ children }) {
  const { planets, setPlanets, titles } = usePlanets();
  const [nameFilter, setNameFilter] = useState('');
  const handleChange = ({ target: { value } }) => {
    setNameFilter(value);
  };
  const contextValue = {
    handleChange,
    nameFilter,
    planets,
    setPlanets,
    titles,
  };
  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
