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
      filterByNumericValues: [],
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
        filterByNumericValues: [...filterTable.filters.filterByNumericValues],
      },
    });
  }

  function handleAddFilterTable(valueFilter) {
    const filterByNumericValuesRemove = filterTable.filters.filterByNumericValues;
    setFilterTable({
      filters: {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [...filterByNumericValuesRemove, valueFilter],
      },
    });
  }

  function handleRemoveFilterTable(valueFilter) {
    const filterByNumericValuesRemove = filterTable.filters.filterByNumericValues;
    const removeValue = filterByNumericValuesRemove
      .filter((filterByNumericValue) => filterByNumericValue.column !== valueFilter);

    setFilterTable({
      filters: {
        filterByName: {
          name: '',
        },
        filterByNumericValues: removeValue,
      },
    });
  }

  return (
    <PlanetsContext.Provider
      value={ {
        resultsAPI,
        filterTable,
        handleFilterTable,
        handleAddFilterTable,
        handleRemoveFilterTable,
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
