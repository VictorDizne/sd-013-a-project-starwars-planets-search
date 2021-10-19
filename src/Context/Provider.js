import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import SwapiContext from './SwapiContext';

function Provider({ children }) {
  const firstRender = useRef(true);
  const [data, setData] = useState({});
  const [backup, setBackup] = useState({});
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  // This is the useEffect responsible for the API fatch and than seting the loading state to false.
  useEffect(() => {
    const fetchApi = async () => {
      const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const response = await request.json();
      const { results } = response;
      const filteredData = results.filter((planet) => delete planet.residents);
      setData(filteredData);
      setBackup(filteredData);
      setLoading(false);
    };
    fetchApi();
  }, [filters]);

  useEffect(() => {
    if (!firstRender.current) {
      const { name } = filters.filterByName;
      const filteredPlanets = [...data]
        .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()));
      setBackup(filteredPlanets);
    } else {
      firstRender.current = false;
    }
  }, [data, filters]);

  const value = { data, backup, loading, filters, setFilters };
  return (
    <SwapiContext.Provider value={ value }>
      { children }
    </SwapiContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
