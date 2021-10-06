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
    setFilterByNumericValues([...filterByNumericValues, actualNumericFilter]);

    setColumnOptions(columnOptions
      .filter((option) => option !== actualNumericFilter.column));
  };

  const handleClickRemoveFilter = (columnTarget) => {
    setColumnOptions([...columnOptions, columnTarget]);
    setFilterByNumericValues(filterByNumericValues
      .filter(({ column }) => column !== columnTarget));
  };

  useEffect(() => {
    setActualNumericFilter({
      ...actualNumericFilter,
      column: columnOptions[0],
    });
  }, [columnOptions]);

  useEffect(() => { // Sempre que o estado planetNameInput e o planets são modificados um novo array de planetas é gerado de acordo com o filtro do input
    // Peguei a referencia do filtro dos numericValues do repositório da Julia Baptista!
    const comparisonHandler = {
      'maior que': (firstNumber, secondNumber) => firstNumber > secondNumber,
      'menor que': (firstNumber, secondNumber) => firstNumber < secondNumber,
      'igual a': (firstNumber, secondNumber) => firstNumber === secondNumber,
    };

    const filteredPlanets = planets.filter((planet) => {
      const filterByName = planet.name.toLowerCase()
        .includes(planetNameInput.toLowerCase());

      const filterByNumericValue = filterByNumericValues
        .every(({ column, comparison, value }) => (
          comparisonHandler[comparison](Number(planet[column]), Number(value))
        ));

      return filterByName && filterByNumericValue;
    });

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
      filterByNumericValues,
    },
    functions: {
      handleChangePlanetInput,
      handleChangeActualNumericFilter,
      handleClickNumericFilter,
      handleClickRemoveFilter,
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
