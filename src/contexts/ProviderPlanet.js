// Req 1 - Criando provider do projeto com requisição.
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import ContextPlanet from './ContextPlanet';

const INITIAL_STATE = {
  planets: [],
};

export default function ProviderContext({ children }) {
  const [data, setData] = useState();
  // A estrutura utilizada no hook useEffect será: useEffect(() => {}, []).
  // Essa estrutura possui o comportamento similar ao 'componentDidMount'.
  useEffect(() => {
    const endPointApi = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const fetchApiData = async () => {
      const getPlanets = await fetch(endPointApi);
      const { results } = await getPlanets.json();
      // REQ 1-Acada iteração no Obj results, é preciso remover a chave residents
      // Pois inicialmente, não será utilizada para preencher a tabela. Logo.
      results.forEach((element) => delete element.residents);
      setData({ ...INITIAL_STATE, planets: results });
    };
    fetchApiData();
  }, []);

  return (
    <ContextPlanet.Provider value={ data }>
      { children }
    </ContextPlanet.Provider>
  );
}

ProviderContext.propTypes = {
  children: PropTypes.node.isRequired,
};
