import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  // estado que irá guardar os planetas com os detalhes recebidos pela API
  const [planets, setPlanets] = useState([]);
  // estado com apenas os planetas para preencher o topo da tabela
  const [planetsKeys, setPlanetsKeys] = useState([]);
  const [isLoading, setLoading] = useState(false);
  // estado com o valor do input para filtrar a tabela
  const [name, setName] = useState('');

  // requisição a API que retora o estado planets e planetsKeys
  const fetchApi = async () => {
    setLoading(true);
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const fetchPlanets = await (await fetch(URL)).json();
    const object = fetchPlanets.results;
    const result = object.map((item) => {
      const planet = item;
      delete planet.residents;
      return planet;
    });
    setPlanets(result);
    const planetsDetails = Object.keys(result[0]);
    setPlanetsKeys(planetsDetails);
    setLoading(false);
  };

  // const context = {
  //   name, // filtro de texto pelo nome
  //   setName, // func que atualiza o input de texto com o nome a ser filtrado
  //   planets, // estado com os planetas e informações sobre ele
  //   planetsKeys, // array com apenas os nomes dos planetas
  //   fetchApi, // requisição API que precisa ser chamada no useEffect(componentDidMount) onde será renderizada
  //   isLoading, // estado com true ou false para colocar um "carregando" na tela enquanto faz a
  // };

  const filters = {
    filters: {
      filterByName: {
        name,
      },
    },
  };

  return (
    <PlanetsContext.Provider
      value={ { planets, planetsKeys, ...filters, fetchApi, isLoading, setName } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PlanetsProvider;
