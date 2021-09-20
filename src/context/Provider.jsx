import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import planetContext from '.';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');

  const handleChange = ({ target: { value } }) => {
    setName(value);
  };

  const filterPlanet = () => {
    const filteredPlanet = data.filter((planet) => planet.name.includes(name));
    setPlanets(filteredPlanet);
  };

  useEffect(filterPlanet, [name, data]);

  useEffect(() => {
    const fetchApiPlanets = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(url).then((res) => res.json());
      setPlanets(results);
      setData(results);
    };
    fetchApiPlanets();
  }, []);

  const contextValue = {
    planets,
    filters: {
      filterByName: {
        handleChange,
        name,
      },
    },
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

// Requisito 01: Me basiei da estrutura que o Wolf usou na revisao do bloco

// Requisito 02: Consegui fazer este requisito seguindo o passo a passo da aula de revisao do Wolf, praticamente ele resolveu esete requisito para nós, valeu Wolf.
