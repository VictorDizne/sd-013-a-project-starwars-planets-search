import propTypes from 'prop-types';
import React, { useState } from 'react';
import StarWarsContext from '.';

const Provider = ({ children }) => {
  const header = {
    name: '',
    rotation_period: '',
    orbital_period: '',
    diameter: '',
    climate: '',
    gravity: '',
    terrain: '',
    surface_water: '',
    population: '',
    // residents: [],
    films: [],
    created: '',
    edited: '',
    url: '',
  };

  const [state, setState] = useState({
    header: Object.keys(header),
    data: [],
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
    },
  });

  // {
  //   column: '',
  //   comparison: '',
  //   value: '',
  // },

  const [saveResults, setSaveResults] = useState([]);
  const [saveResultsClone, setSaveResultsClone] = useState([]);
  // const [saveResultsForReset, setSaveResultsForReset] = useState([]);

  const fetchData = () => {
    // const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const url = 'https://swapi.dev/api/planets/';
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        const { results } = json;
        setState({ ...state, data: results });
        setSaveResults(results);
        setSaveResultsClone(results);
        // setSaveResultsForReset(results);
      })
      .catch((error) => console.log(`Problem ${error.message}`));
  };

  const filterByName = (string) => {
    const filteredData = saveResults.filter((planet) => planet.name.includes(string));
    setState({ ...state, data: filteredData });
    setSaveResultsClone(filteredData);
  };

  const filterByNumerics = (column, comparison, numCriteria) => {
    const filteredDataByNumerics = saveResultsClone.filter((planet) => {
      if (comparison === 'maior que') {
        return (Number(planet[column]) > Number(numCriteria));
      } if (comparison === 'menor que') {
        return (Number(planet[column]) < Number(numCriteria));
      } if (comparison === 'igual a') {
        return (Number(planet[column]) === Number(numCriteria));
      }
      return false;
    });
    setSaveResultsClone(filteredDataByNumerics);
    setState({
      ...state,
      data: filteredDataByNumerics,
      filters: {
        ...state.filters,
        filterByNumericValues: [
          ...state.filters.filterByNumericValues,
          {
            column,
            comparison,
            value: numCriteria,
          },
        ],
      } });
  };

  const [cumulativeFilters, setCumulativeFilters] = useState([]);

  const resetData = (arrayFilters) => {
    // const { filters: { filterByNumericValues } } = state;
    console.log('resetData', arrayFilters);
    if (arrayFilters.length !== 0) {
      setCumulativeFilters(arrayFilters);
      cumulativeFilters.forEach((item) => {
        const { column, comparison, value } = item;
        filterByNumerics(column, comparison, value);
        setState({
          ...state,
          filters: {
            ...state.filters,
            filterByNumericValues: [...cumulativeFilters],
          },
        });
      });
      setSaveResultsClone(saveResults);
    } else {
      console.log('filtro vazio', saveResults);
      setState({
        ...state,
        data: saveResults,
        filters: {
          ...state.filters,
          filterByNumericValues: [...cumulativeFilters],
        },
      });
    }
  };

  const contextValue = {
    state,
    setState,
    fetchData,
    resetData,
    saveResults,
    filterByName,
    filterByNumerics,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: propTypes.node,
}.isRequired;

export default Provider;
