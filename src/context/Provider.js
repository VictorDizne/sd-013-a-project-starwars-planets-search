import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import fetchPlanets from '../data';
import MyContext from './MyContext';

function Provider({ children }) {
  const [useData, setUseData] = useState([]);
  const [dataTable, setDataTable] = useState({});
  const [valueInput, setValueInput] = useState('');
  // const [numericFilters, setNumericFilters] = useState({ filterByNumericValues: [] });
  // setNumericFilters({
  //   filterByNumericValues: [...numericFilters.filterByNumericValues, filters] });

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

  function handleChangeFilters(filters) {
    const { column, comparison, value } = filters;
    const dataFilters = useData.filter((planet) => {
      if (comparison === 'maior que') {
        return Number(planet[column]) > Number(value);
      }
      if (comparison === 'menor que') {
        return Number(planet[column]) < Number(value);
      }
      if (comparison === 'igual a') {
        return Number(planet[column]) === Number(value);
      }
      return false;
    });
    setUseData(dataFilters);
    console.log(useData);
  }

  // function values() {
  //   // const { filterByNumericValues } = numericFilters;
  //   // const { column, comparison, value } = filterByNumericValues;
  //   console.log(numericFilters);
  // }

  const contextValue = {
    useData,
    dataTable,
    valueInput,
    handleChange,
    // numericFilters,
    handleChangeFilters,
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
