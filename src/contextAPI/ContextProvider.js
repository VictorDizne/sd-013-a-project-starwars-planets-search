import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import planetsContext from '.';
import fetchStarWarsPlanets from '../services/api';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [planetNameInput, setPlanetInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);

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

  useEffect(() => { // Sempre que o estado planetNameInput e o planets são modificados um novo array de planetas é gerado de acordo com o filtro do input
    const filteredPlanets = planets.filter(({ name }) => (
      name.toLocaleLowerCase().includes(planetNameInput.toLocaleLowerCase()) // filtro pelo nome do planeta
    ));
    setFilteredData(filteredPlanets);
  }, [planetNameInput, planets]);

  const contextValue = {
    data: planets,
    filteredData,
    filters: {
      filterByName: {
        name: planetNameInput,
      },
    },
    functions: {
      handleChangePlanetInput,
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
