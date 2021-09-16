import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './mycontext';

const columnNumericFilters = {
  population: 'population',
  orbital_period: 'orbital_period',
  diameter: 'diameter',
  rotation_period: 'rotation_period',
  surface_water: 'surface_water',
};

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [ogPlanets, setOgPlanets] = useState([]);
  const [endFetch, finishFetch] = useState(false);
  const [nameFilter, changeNameFilter] = useState('');
  const [columnNumericFilter, changeColumnNumericFilter] = useState('population');
  const [comparisonNumericFilter, changeComparisonNumericFilter] = useState('maior que');
  const [numericFilter, changeNumericFilter] = useState(0);
  const [activateFilter, handleFilterActicvate] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((result) => result.json())
        .then((result) => result.results);
      response.forEach((element) => {
        delete element.residents;
      });
      setOgPlanets(response);
      setPlanets(response);
      finishFetch(true);
    }
    fetchData();
  }, [endFetch]);

  useEffect(() => {
    if (activateFilter > 0) {
      if (comparisonNumericFilter === 'maior que') {
        const newPlanets = planets
          .filter((planet) => planet[columnNumericFilter] > numericFilter);
        return setPlanets(newPlanets);
      }
      if (comparisonNumericFilter === 'menor que') {
        const newPlanets = planets
          .filter((planet) => planet[columnNumericFilter] < numericFilter);
        return setPlanets(newPlanets);
      }
      const newPlanets = planets
        .filter((planet) => planet[columnNumericFilter] === numericFilter);
      return setPlanets(newPlanets);
    }
  }, [activateFilter]);

  const contextInitialValue = {
    data: planets,
    setPlanets,
    activateFilter,
    handleFilterActicvate,
    filters: {
      filterByName: {
        name: nameFilter,
        changeNameFilter,
      },
      filterByNumericValues: {
        column: columnNumericFilter,
        changeColumnNumericFilter,
        comparison: comparisonNumericFilter,
        changeComparisonNumericFilter,
        value: numericFilter,
        changeNumericFilter,
      },
      columnNumericFilters,
    },
  };

  function changePlanetsArray(newPlanets) {
    setPlanets(newPlanets);
  }
  useEffect(() => {
    const newPlanets = ogPlanets
      .filter((planet) => planet.name.toLowerCase().includes(nameFilter.toLowerCase()));
    changePlanetsArray(newPlanets);
  }, [nameFilter, ogPlanets]);

  return (
    <Context.Provider value={ contextInitialValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
