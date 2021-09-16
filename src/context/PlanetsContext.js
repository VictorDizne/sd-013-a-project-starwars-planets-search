import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const PlanetsContext = createContext();

function PlanetsProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const res = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
        if (!res.ok) throw new Error('failed to fetch data');
        const json = await res.json();
        setLoading(false);
        setData(json.results);
      } catch (e) {
        setLoading(false);
        setError(e.message);
      }
    };
    fetchPlanets();
  }, []);

  const contextValue = { loading, data, error };

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
