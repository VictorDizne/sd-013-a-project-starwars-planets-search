import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services/planetsAPI';
import PlanetsContext from './PlanetsContext';

function PlanetsProvide({ children }) {
  const [resultsAPI, setResultsAPI] = useState([]);
  const [filterTable, setFilterTable] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  useEffect(() => {
    async function listResultInTable() {
      const results = await getPlanets();
      setResultsAPI(results);
    }
    listResultInTable();
  }, []);

  function handleFilterTable(nameFilter) {
    setFilterTable({
      filters: {
        filterByName: {
          name: nameFilter,
        },
      },
    });
  }

  return (
    <PlanetsContext.Provider
      value={ {
        resultsAPI,
        filterTable,
        handleFilterTable,
      } }
    >
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvide.propTypes = {
  children: PropTypes.arrayOf(Object).isRequired,
};

export default PlanetsProvide;
