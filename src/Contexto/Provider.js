import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MyContext from './MyContext';
import useFetchPlanets from '../Hooks/useFetchPlanets';

function Provider({ children }) {
  const { planets, setPlanets, heads } = useFetchPlanets();
  const [nameFilter, setNameFilter] = useState('');
  const [filterByNumericValues, setfilterByNumericValues] = useState([]);
  const [columnItems, setColumnItems] = useState(['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water']);

  const handleChange = ({ target: { value } }) => {
    setNameFilter(value);
  };

  const handleClick = (value) => {
    setfilterByNumericValues([...filterByNumericValues, value]);
    setColumnItems([...columnItems].filter((item) => item !== value.column));
  };

  const contextValue = {
    planets,
    setPlanets,
    heads,
    nameFilter,
    handleChange,
    filterByNumericValues,
    setfilterByNumericValues,
    handleClick,
    columnItems,
    setColumnItems,
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
