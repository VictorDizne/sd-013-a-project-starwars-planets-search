import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '.';
import getPlanetsFetch from '../services/starWarsApi';

const Provider = (props) => {
  const [data, setData] = useState({
    data: {},
    isLoading: true,
  });

  const getPlanets = () => {
    getPlanetsFetch()
      .then((reponse) => setData({
        data: reponse,
        isLoading: false,
      }));
  };

  useEffect(() => {
    getPlanets();
  }, []);

  const { children } = props;

  return (
    <StarWarsContext.Provider value={ data }>
      { children }
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default Provider;
