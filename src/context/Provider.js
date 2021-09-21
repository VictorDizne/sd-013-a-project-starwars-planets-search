import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MyContext from './myContext';
import usePlanets from '../Hooks/useFetch';

function Provider({ children }) {
  const { planets, setPlanets, titles } = usePlanets();
  const [nameFilter, setNameFilter] = useState('');
  const [colummFilter, setColummFilter] = useState('');
  const [quantityFilter, setQuantityFilter] = useState('');
  const [numberFilter, setNumberFilter] = useState(0);
  const [stateFiltered, setStateFiltered] = useState({});

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
    case 'planet':
      return setNameFilter(value);
    case 'columm':
      return setColummFilter(value);
    case 'quantity':
      return setQuantityFilter(value);
    case 'number':
      return setNumberFilter(value);
    default:
      break;
    }
  };

  const handleClick = () => {
    setStateFiltered({
      colummFilter,
      quantityFilter,
      numberFilter,
    });
  };

  const contextValue = {
    handleClick,
    stateFiltered,
    handleChange,
    nameFilter,
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
  children: PropTypes.node,
}.isRequired;

export default Provider;
