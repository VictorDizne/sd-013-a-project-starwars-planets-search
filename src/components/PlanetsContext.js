import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const PlanetsContext = React.createContext();

export const usePlanets = () => useContext(PlanetsContext);

export const PlanetsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((receivedData) => setData(receivedData.results));
  }, []);
  if ((data !== undefined) || (data !== null)) {
    return (
      <PlanetsContext.Provider value={ data }>
        {children}
      </PlanetsContext.Provider>
    );
  }
};

PlanetsProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
