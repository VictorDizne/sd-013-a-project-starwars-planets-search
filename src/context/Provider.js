import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import MyContext from './MyContext';
import fetchPlanets from '../Api';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [valueInput, setValueInput] = useState('');
  const handleChange = ({ target: { value } }) => {
    setValueInput(value);
  };

  useEffect(() => {
    async function getApi() {
      const response = await fetchPlanets();
      setData(response);
    } getApi();
  }, []);

  function values(input, optionColumn, optionComparison) {
    const resultFilter = data.filter((planet) => {
      if (optionComparison === 'maior que') {
        return Number(planet[optionColumn]) > Number(input);
      }
      if (optionComparison === 'menor que') {
        return Number(planet[optionColumn]) < Number(input);
      }
      if (optionComparison === 'igual a') {
        return Number(planet[optionColumn]) === Number(input);
      }
      return false;
    });
    setData(resultFilter);
  }

  const contextValue = {
    data,
    handleChange,
    valueInput,
    values,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
