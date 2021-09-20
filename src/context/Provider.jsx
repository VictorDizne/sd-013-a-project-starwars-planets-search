import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import planetContext from '.';

const Provider = ({ children }) => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchApiPlanets = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(url).then((res) => res.json());
      setPlanets(results);
      // setData(results);
    };
    fetchApiPlanets();
  }, []);

  const contextValue = {
    planets,
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
