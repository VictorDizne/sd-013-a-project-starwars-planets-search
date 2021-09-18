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
      filterByNumericValues: [
        {
          column: '',
          comparison: '',
          value: '',
        },
      ],
    },
  });

  const [saveResults, setSaveResults] = useState([]);
  const [saveResultsClone, setSaveResultsClone] = useState([]);

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
    setState({ ...state, data: filteredDataByNumerics });
  };

  const contextValue = {
    state,
    setState,
    fetchData,
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
