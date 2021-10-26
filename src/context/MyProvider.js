// Requisito 1
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

const STATE = {
  filterByName: '',
  filterByNumericValues: [],
  // Requisito 6
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(STATE);

  useEffect(() => {
    const fetchPlanet = () => {
      fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((obj) => obj.json())
        .then(({ results }) => setData(results));
    };
    fetchPlanet();
  }, []);

  const contextValue = {
    data,
    setData,
    setFilter,
    filter,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}
MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
