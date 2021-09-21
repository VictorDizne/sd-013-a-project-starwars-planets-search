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

  // useEffect(() => {
  //   // Source: https://stackoverflow.com/questions/35582978/best-way-to-filter-table-in-react
  //   const checkIncludes = data.filter(({ name }) => name.includes(valueInput));
  //   setData(checkIncludes);
  // }, [valueInput]);

  const contextValue = {
    data,
    handleChange,
    valueInput,
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
