import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from '.';

const initialFilters = {
  filterByName: {
    name: '',
  },
  filterByOtherFilters: [],
  order: {
    column: 'name',
    sort: 'ASC',
  },
};

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    const fetchApi = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((res) => res.json());
      setData(results);
    };
    fetchApi();
  }, []);

  const contextValue = { data, filters, setFilters };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      { children }
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;

PlanetsProvider.propTypes = {
  children: PropTypes.oneOfType(
    [PropTypes.func,
      PropTypes.node],
  ).isRequired,
};
