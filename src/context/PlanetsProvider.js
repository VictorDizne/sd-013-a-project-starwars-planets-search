import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchPlanets } from '../services/fetchApi';
import PlanetsContext from './PlanetsContext';

const PlanetsProvider = ({ children }) => {
  const initialFilters = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'Name',
      sort: 'ASC',
    },
  };

  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState(initialFilters);

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

  const value = { planets, filters, setFilters };

  return (
    <PlanetsContext.Provider value={ value }>
      {children}
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
};

export default PlanetsProvider;
