import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [tableData, setTableData] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [inputName, setInputName] = useState('');
  const [inputColumn, setInputColumn] = useState('');
  const [inputComparison, setInputComparison] = useState('');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();
      return data.results;
    };
    fetchResults().then((results) => setTableData(results));
  }, []);

  useEffect(() => {
    setFilteredPlanets(tableData);
  }, [tableData]);

  useEffect(() => {
    const filteredPlanetsByText = tableData
      .filter((planet) => planet.name.toLowerCase().includes(inputName.toLowerCase()));
    setFilteredPlanets(filteredPlanetsByText);
  }, [inputName, tableData]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
    case 'name':
      setInputName(value);
      break;

    case 'column':
      setInputColumn(value);
      break;

    case 'comparison':
      setInputComparison(value);
      break;

    case 'value':
      setInputValue(value);
      break;

    default:
      return setFilteredPlanets(filteredPlanets);
    }
  };

  const handleClick = (inputColumn2, inputComparison2, inputValue2) => {
    switch (inputComparison2) {
    case 'maior que':
      setFilteredPlanets(filteredPlanets
        .filter((planet) => +planet[inputColumn2] > +inputValue2));
      break;

    case 'menor que':
      setFilteredPlanets(filteredPlanets
        .filter((planet) => +planet[inputColumn2] < +inputValue2));
      break;

    case 'igual a':
      setFilteredPlanets(filteredPlanets
        .filter((planet) => +planet[inputColumn2] === +inputValue2));
      break;

    default:
      return setFilteredPlanets(filteredPlanets);
    }
  };

  const planetValue = {
    tableData,
    filteredPlanets,
    inputName,
    inputColumn,
    inputComparison,
    inputValue,
    handleChange,
    handleClick,
  };

  return (
    <PlanetContext.Provider value={ planetValue }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
