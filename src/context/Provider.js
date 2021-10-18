import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import fetchPlanets from '../data';
import MyContext from './MyContext';

function Provider({ children }) {
  const [useData, setUseData] = useState([]);
  const [dataTable, setDataTable] = useState({});
  const [valueInput, setValueInput] = useState('');
  const [numericFilters, setNumericFilters] = useState({ filterByNumericValues: [] });

  useEffect(() => {
    async function getAPI() {
      const results = await fetchPlanets();
      setUseData(results);
      setDataTable(results[0]);
    }
    getAPI();
  }, []);

  function handleChange({ target: { value } }) {
    setValueInput(value);
  }

  const contextValue = {
    useData,
    dataTable,
    valueInput,
    handleChange,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
