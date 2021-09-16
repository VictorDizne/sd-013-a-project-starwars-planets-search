import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services/planetsAPI';
import PlanetsContext from './PlanetsContext';

function PlanetsProvide({ children }) {
  console.log(children);
  const [resultsAPI, setResultsAPI] = useState([]);

  useEffect(() => {
    async function listResultInTable() {
      const results = await getPlanets();
      setResultsAPI(results);
    }
    listResultInTable();
  }, []);

  return (
    <PlanetsContext.Provider value={ resultsAPI }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvide.propTypes = {
  children: PropTypes.objectOf(Object).isRequired,
};

export default PlanetsProvide;
