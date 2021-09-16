import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchPlanets } from '../services/fetchApi';
import PlanetsContext from './PlanetsContext';

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);

  const fetchApi = async () => {
    try {
      const api = await fetchPlanets();
      setPlanets([...api]);
    } catch (error) {
      return console.log(error.message);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <PlanetsContext.Provider value={ planets }>
      {children}
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
};

export default PlanetsProvider;
