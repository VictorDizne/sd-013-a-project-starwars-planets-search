// Requisito 1
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilter] = useState('');

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
    setFilter,
    filterByName,
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
