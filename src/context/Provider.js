import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetsContext from './PlanetsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    filterByName: '',
  });

  const handleChange = ({ target }) => {
    setFilter({
      ...filter,
      filterByName: target.value,
    });
  };

  useEffect(() => {
    const API = 'https://swapi-trybe.herokuapp.com/api/planets/';
    async function fetchData() {
      const request = await fetch(API);
      const json = await request.json();
      setData(json.results);
    }
    fetchData();
  }, []);

  const context = { data, filter, handleChange };

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
