import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [tableData, setTableData] = useState([]);
  const [filters, setFilters] = useState(
    {
      filterByName: {
        name: '',
      },
    },
  );

  const [filteredPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();
      return data.results;
    };
    fetchResults().then((results) => setTableData(results));
  }, []);

  useEffect(() => {
    setFilteredPlanets(tableData);
  }, [tableData]);

  useEffect(() => {
    const filterPlanets = tableData
      .filter((planet) => planet.name.toLowerCase().includes(filters.filterByName.name));
    setFilteredPlanets(filterPlanets);
  }, [filters, tableData]);

  const handleChange = ({ target }) => {
    if (target.id === 'name') {
      setFilters({ filterByName: { name: target.value } });
    }
  };

  const planetValue = { tableData, setTableData, filters, handleChange, filteredPlanets };

  return (
    <PlanetContext.Provider value={ planetValue }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
