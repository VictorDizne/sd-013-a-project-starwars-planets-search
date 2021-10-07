import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  // estado que irá guardar os planetas com os detalhes recebidos pela API
  const [planets, setPlanets] = useState([]);

  const [filteredPlanets, setFilteredPlanets] = useState(planets);
  // estado com apenas os planetas para preencher o topo da tabela
  const [planetsKeys, setPlanetsKeys] = useState([]);
  // estado com valor boleano para renderizar um texto "carregando" enquanto a requisição a Api é feita
  const [isLoading, setLoading] = useState(true);
  // estado com o valor do input para filtrar a tabela
  const [name, setName] = useState('');
  // esta que recebe o valor do select refente a coluna da tabela para fazer o filtro
  // const [column, setColumn] = useState('population');
  // estado que recebe o valor do select referente a comparação para filtro em relação ao número que será digitado no input
  // const [comparison, setComparison] = useState('maior que');
  // estado que guarda o valor numérico digitado pelo usuário para filtro
  // const [value, setValue] = useState(0);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  // console.log(filterByNumericValues);

  // requisição a API que retora o estado planets e planetsKeys
  const fetchApi = async () => {
    // setLoading(true);
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const fetchPlanets = await (await fetch(URL)).json();
    const object = fetchPlanets.results;
    const result = object.map((item) => {
      const planet = item;
      delete planet.residents;
      return planet;
    });
    setPlanets(result);
    setFilteredPlanets(result);
    const planetsDetails = Object.keys(result[0]);
    setPlanetsKeys(planetsDetails);
    setLoading(false);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const comparisonCases = (filter) => {
    switch (filter.comparison) {
    case 'maior que':
      console.log('maior');
      setFilteredPlanets(
        planets.filter((planet) => Number(planet[filter.column]) > Number(filter.value)),
      );
      break;
    case 'menor que':
      console.log('menor');
      setFilteredPlanets(
        planets.filter((planet) => Number(planet[filter.column]) < Number(filter.value)),
      );
      break;
    case 'igual a':
      console.log('igual');
      setFilteredPlanets(
        planets.filter((planet) => planet[filter.column] === filter.value),
      );
      break;
    default:
      setFilteredPlanets(planets);
      break;
    }
  };

  const filterPlanets = () => {
    filterByNumericValues.forEach(comparisonCases); // = forEach((filter) => casos(filter))
  };

  useEffect(() => {
    filterPlanets();
  }, [filterByNumericValues]);

  // const filters = {
  //   filters: {
  //     filterByName: {
  //       name,
  //     },
  //     filterByNumericValues: [
  //       {
  //         column,
  //         comparison,
  //         value,
  //       },
  //     ],
  //   },
  // };

  const context = {
    planets,
    planetsKeys,
    // ...filters,
    name,
    fetchApi,
    isLoading,
    setName,
    filterByNumericValues,
    setFilterByNumericValues,
    filteredPlanets,
    filterPlanets,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default PlanetsProvider;
