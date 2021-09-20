import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import planetsContext from '.';
import fetchStarWarsPlanets from '../services/api';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [planetNameInput, setPlanetInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [columnOptions, setColumnOptions] = useState([
    'population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water',
  ]);
  const [actualNumericFilter, setActualNumericFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const [buttonIsClicked, setButtonIsClicked] = useState(false);

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
    // const filteredPlanets = planets.filter(({ name }) => (
    //   name.toLowerCase().includes(planetNameInput.toLowerCase())))
    //   .filter((planet, index, lastFilteredPlanets) => {
    //     const searchKeyValue = Number(Object.entries(planet)
    //       .find(([key]) => key === actualNumericFilter.column)[1]);

    //     switch (actualNumericFilter.comparison) {
    //     case 'maior que':
    //       return searchKeyValue > Number(actualNumericFilter.value);
    //     case 'menor que':
    //       return searchKeyValue < Number(actualNumericFilter.value);
    //     case 'igual a':
    //       return searchKeyValue === Number(actualNumericFilter.value);
    //     default:
    //       return lastFilteredPlanets;
    //     }
    //   });
    setFilterByNumericValues([...filterByNumericValues, actualNumericFilter]);
    setColumnOptions(columnOptions
      .filter((option) => option !== actualNumericFilter.column));
    setButtonIsClicked(true);

    // setFilteredData(filteredPlanets);
  };

  useEffect(() => {
    setActualNumericFilter({
      ...actualNumericFilter,
      column: columnOptions[0],
    });
  }, [columnOptions]);

  useEffect(() => { // Sempre que o estado planetNameInput e o planets são modificados um novo array de planetas é gerado de acordo com o filtro do input
    // const filteredPlanets = planets.filter(({ name }) => (
    //   name.toLocaleLowerCase().includes(planetNameInput.toLocaleLowerCase()))); // filtro pelo nome do planeta
    // setFilteredData(filteredPlanets);
    const filteredPlanets = planets.filter(({ name }) => (
      name.toLowerCase().includes(planetNameInput.toLowerCase())))
      .filter((planet, index, lastFilteredPlanets) => {
        if (!buttonIsClicked) return lastFilteredPlanets;

        const [planetKey, planetValue] = Object.entries(planet)
          .find(([key]) => key === filterByNumericValues[0].column);
        console.log(planetKey);
        switch (filterByNumericValues[0].comparison) {
        case 'maior que':
          return planetValue > filterByNumericValues[0].value;
        case 'menor que':
          return planetValue < filterByNumericValues[0].value;
        case 'igual a':
          return planetValue === filterByNumericValues[0].value;
        default:
          return lastFilteredPlanets;
        }
      });

      // .filter((planet, index, lastFilteredPlanets) => {
      //   if (!buttonIsClicked) return lastFilteredPlanets;
      //   const searchKeyValue = Number(Object.entries(planet)
      //     .find(([key]) => key === actualNumericFilter.column)[1]);
      //   switch (actualNumericFilter.comparison) {
      //   case 'maior que':
      //     return searchKeyValue > Number(actualNumericFilter.value);
      //   case 'menor que':
      //     return searchKeyValue < Number(actualNumericFilter.value);
      //   case 'igual a':
      //     return searchKeyValue === Number(actualNumericFilter.value);
      //   default:
      //     return lastFilteredPlanets;
      //   }
      // });

    setFilteredData(filteredPlanets);
  }, [planetNameInput, planets, filterByNumericValues]);

  const contextValue = {
    data: planets,
    filteredData,
    actualNumericFilter,
    columnOptions,
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
