import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [planetsInfo, setPlanetsInfo] = useState([]);

  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  const [filterNumeric, setFilterNumeric] = useState({
    filterByNumericValues: {
      column: 'population',
      comparison: 'maior que',
      value: 0,
    },
  });

  async function apiPlanets() {
    const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(API_URL);
    const json = await response.json();
    setData(json.results);
    setLoading(false);
  }

  useEffect(() => {
    apiPlanets();
  }, []);

  const handleFilterName = (filterName) => {
    const { filters: { filterByName } } = filter;
    setFilter({
      ...filter, filters: { filterByName: { ...filterByName, name: filterName } },
    });
  };

  const handleFilter = ({ target: { name, value } }) => {
    const { filterByNumericValues } = filterNumeric;
    setFilterNumeric({
      ...filterNumeric,
      filterByNumericValues: { ...filterByNumericValues, [name]: value },
    });
  };

  const contextValue = {
    data,
    loading,
    handleFilterName,
    filter,
    handleFilter,
    filterNumeric,
    setFilteredPlanets,
    filteredPlanets,
    setPlanetsInfo,
    planetsInfo,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      { children }
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
