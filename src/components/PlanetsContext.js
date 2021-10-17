import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// criando o contexto global PlanetsContext
const PlanetsContext = React.createContext();
// custom hook que recebe um parametro e passa pro contexto
// facilita usar os estados nos componentes filhos
export const usePlanets = () => useContext(PlanetsContext);
// criando o provider
export const PlanetsProvider = ({ children }) => {
  const [data, setData] = useState();
  const [planetsArray, setPlanetsArray] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [{
        column: '',
        comparison: '',
        value: 0,
      }],
      order: {
        column: '',
        sort: '',
      },
    },
  });
  // fazendo o fetch ao montar o componente
  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((receivedData) => setData(receivedData));
  }, []);
  // planetsArray recebe apenas o objeto results da api (contem apenas o array com os planetas)
  useEffect(() => {
    const MENOS_UM = -1;
    if (data) {
      const results = data.results.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()
        ) return MENOS_UM;
        if (a.name.toLowerCase() > b.name.toLowerCase()
        ) return 1;
        return 0;
      });
      setPlanetsArray(results);
      // setFilteredPlanets(results);
    }
  }, [data]);
  // constante value é um objeto que passa os estados usados nos outros componentes
  const value = {
    planetsArray,
    setPlanetsArray,
    filteredPlanets,
    setFilteredPlanets,
    filter,
    setFilter,
  };

  return (
    <PlanetsContext.Provider value={ value }>
      {children}
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// ORDENAÇÃO:
// https://www.youtube.com/watch?v=0d76_2sksWY

// CONTEXT e CUSTOM HOOK:
// https://www.youtube.com/watch?v=5LrDIWkK_Bc
