import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import fetchPlanets from '../data';
import MyContext from './MyContext';

function Provider({ children }) {
  const [useData, setUseData] = useState([]);
  const [dataTable, setDataTable] = useState({});
  const [valueInput, setValueInput] = useState('');
  const [buttonFilter, setButtonFilter] = useState([]);
  const [options, setOptions] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );
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
    setButtonFilter([...buttonFilter, filters]);
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
      return true;
    });
    setUseData(dataFilters);
    const select = document.getElementById('column-filter-id');
    const option = select.options[select.selectedIndex].value;
    const filterOptions = options.filter((opt) => option !== opt);
    setOptions(filterOptions);
    console.log(option);
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
    buttonFilter,
    handleChangeFilters,
    options,
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
