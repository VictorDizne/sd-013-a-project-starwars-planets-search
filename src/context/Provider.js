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
    setButtonFilter([...buttonFilter, filters]);

    /* const dataFilters = useData.filter((planet) => {
      const validate = [...buttonFilter, filters].every(({ column, comparison, value }) => {
        if (comparison === 'maior que') {
          return Number(planet[column]) > Number(value);
        }
        if (comparison === 'menor que') {
          return Number(planet[column]) < Number(value);
        }

        return Number(planet[column]) === Number(value);
      });
      return validate;
    }); */

    /*     const dataFilters = useData.filter((planet) => {
      if (filters.comparison === 'maior que') {
        return Number(planet[filters.column]) > Number(filters.value);
      }
      if (filters.comparison === 'menor que') {
        return Number(planet[filters.column]) < Number(filters.value);
      }
      if (filters.comparison === 'igual a') {
        return Number(planet[filters.column]) === Number(filters.value);
      }
      return true;
    }); */
    const select = document.getElementById('column-filter-id');
    const option = select.options[select.selectedIndex].value;
    const filterOptions = options.filter((opt) => option !== opt);
    setOptions(filterOptions);
  }

  function removeFilter(columnToRemove) {
    const filterRemove = buttonFilter.filter(({ column }) => columnToRemove !== column);
    setButtonFilter(filterRemove);
    setOptions([...options, columnToRemove]);
  }

  const contextValue = {
    useData,
    dataTable,
    valueInput,
    handleChange,
    buttonFilter,
    handleChangeFilters,
    options,
    removeFilter,
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
