import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const PlanetsContext = createContext();

const initialFilters = {
  filterByName: {
    name: '',
  },
};

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    const fetchPlanets = async () => {
      const res = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      if (!res.ok) throw new Error('failed to fetch data');
      const json = await res.json();
      setData(json.results);
    };
    fetchPlanets();
  }, []);

  const contextValue = { data, filters, setFilters };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;

PlanetsProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
};
