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
  // const [filterNum, setFilterNum] = useState();
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: 0,
    },
  });
  const filterNum = filter.filters.filterByNumericValues;
  // fazendo o fetch ao montar o componente
  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((receivedData) => setData(receivedData));
  }, []);
  // planetsArray recebe apenas o objeto results da api (contem apenas o array com os planetas)
  useEffect(() => {
    if (data) {
      setPlanetsArray(data.results);
    }
  }, [data]);
  // constante value é um objeto que passa os estados usados nos outros componentes
  const value = {
    data, planetsArray, setPlanetsArray, filter, setFilter, filterNum,
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
