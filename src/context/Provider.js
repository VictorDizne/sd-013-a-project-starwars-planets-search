import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/fetchPlanets';

const Context = createContext();

function Provider({ children }) {
  const [data, setData] = useState([]);

  const [fetching, setFetching] = useState(true);

  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  useEffect(() => {
    const getPlanets = async () => {
      const planets = await fetchPlanets();
      setData(planets);
      setFetching(false);
    };
    getPlanets();
  }, []);

  const handleSearchByName = (userInput) => {
    setFilters({
      ...filters,
      filterByName: { name: userInput } });
  };

  const handleNewNumericFilter = (newFilter) => {
    setFilters({
      ...filters,
      filterByNumericValues: [newFilter] }); // Handle apenas um `filter` (requisito 3)
  };

  const context = {
    data, fetching, handleSearchByName, filters, handleNewNumericFilter };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Provider, Context };
