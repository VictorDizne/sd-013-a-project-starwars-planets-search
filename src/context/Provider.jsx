import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import planetContext from '.';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filter, setFilter] = useState([]);
  const [name, setName] = useState('');

  const handleChange = ({ target: { value } }) => {
    setName(value);
  };

  // const filterPlanet = () => {
  //   const filteredPlanet = data.filter((planet) => planet.name.includes(name));
  //   setPlanets(filteredPlanet);
  // };

  const allFilters = () => {
    let filteredNumber = data.filter((planet) => planet.name.includes(name));
    filter.forEach((fil) => {
      const { column, comparison, value } = fil;
      filteredNumber = filteredNumber.filter((planet) => {
        switch (comparison) {
        case 'maior que':
          return Number(planet[column]) > Number(value);
        case 'menor que':
          return Number(planet[column]) < Number(value);
        case 'igual a':
          return Number(planet[column]) === Number(value);
        default:
          return data;
        }
      });
    });
    setPlanets(filteredNumber);
  };

  useEffect(() => {
    const fetchApiPlanets = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(url).then((res) => res.json());
      setPlanets(results);
      setData(results);
    };
    fetchApiPlanets();
  }, []);

  useEffect(allFilters, [name, filter]);

  const contextValue = {
    planets,
    handleChange,
    name,
    filter,
    setFilter,
    data,
    setData,
  };
  return (
    <planetContext.Provider value={ contextValue }>
      {
        children
      }
    </planetContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.any.isRequired,
}.isRequired;

export default Provider;

// Requisito 01: Me baseei na estrutura que o Wolf usou na revisao do bloco.

// Requisito 02: Consegui fazer este requisito seguindo o passo a passo da aula de revisao do Wolf, praticamente ele resolveu este requisito para nós, valeu Wolf.

// Requisito 03: Obtive ajuda dos colegas Vinicius Dionysio e Felipe Dias, eles me deram duas dicas de grande valor, a primeira de encapsular os dois filtros dentro de apenas uma função, pois quando um filtro estava funcionando o outro quebrava, a segunda dica é com a logica de criar o useState dentro do componente <FilterValues />, facilitou o gerenciamento dos dados.

// Requisito 04 : Estava encontrando dificuldades em passar as options para o select de colunas de forma dinamica (vindo do Context), foi quando o Jean Pacheco (integtrante do meu grupo do projeto "App de Receitas"), me deu uma dica de construir um estado somente para o select colunas, foi quando consegui concluir o requisito.
