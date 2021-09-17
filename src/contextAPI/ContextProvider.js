import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import planetsContext from '.';
import fetchStarWarsPlanets from '../services/api';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [planetNameInput, setPlanetInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  // const [filterByNumericValues, setFilterByNumericValues] = useState([
  //   {
  //     column: 'population',
  //     comparison: 'maior que',
  //     value: '',
  //   },
  // ]);
  const [actualNumericFilter, setActualNumericFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const getPlanets = async () => {
    const fetchedPlanets = await fetchStarWarsPlanets();
    setPlanets(fetchedPlanets);
    setFilteredData(fetchedPlanets);
  };

  useEffect(() => { // ComponentDidMount
    getPlanets();
  }, []);

  const handleChangePlanetInput = ({ target: { value } }) => {
    setPlanetInput(value);
  };

  const handleChangeActualNumericFilter = ({ target: { value, name } }) => {
    setActualNumericFilter({
      ...actualNumericFilter,
      [name]: value,
    });
  };

  const handleClickNumericFilter = () => {
    const filteredPlanets = planets.filter(({ name }) => (
      name.toLocaleLowerCase().includes(planetNameInput.toLocaleLowerCase())))
      .filter((planet) => {
        const searchKeyValue = Number(Object.entries(planet)
          .find(([key]) => key === actualNumericFilter.column)[1]);

        switch (actualNumericFilter.comparison) {
        case 'maior que':
          return searchKeyValue > Number(actualNumericFilter.value);
        case 'menor que':
          return searchKeyValue < Number(actualNumericFilter.value);
        case 'igual a':
          return searchKeyValue === Number(actualNumericFilter.value);
        default:
          return '';
        }
      });

    setFilteredData(filteredPlanets);
  };

  useEffect(() => { // Sempre que o estado planetNameInput e o planets são modificados um novo array de planetas é gerado de acordo com o filtro do input
    const filteredPlanets = planets.filter(({ name }) => (
      name.toLocaleLowerCase().includes(planetNameInput.toLocaleLowerCase()))); // filtro pelo nome do planeta
    setFilteredData(filteredPlanets);
  }, [planetNameInput, planets]);

  const contextValue = {
    data: planets,
    filteredData,
    actualNumericFilter,
    filters: {
      filterByName: {
        name: planetNameInput,
      },
      // filterByNumericValues,
    },
    functions: {
      handleChangePlanetInput,
      handleChangeActualNumericFilter,
      handleClickNumericFilter,
    },
  };

  return (
    <planetsContext.Provider value={ contextValue }>
      {children}
    </planetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
