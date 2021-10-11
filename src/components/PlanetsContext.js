import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const PlanetsContext = React.createContext();

export const usePlanets = () => useContext(PlanetsContext);

export const PlanetsProvider = ({ children }) => {
  const [data, setData] = useState();
  const [planetsArray, setPlanetsArray] = useState([]);
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((receivedData) => setData(receivedData));
  }, []);

  useEffect(() => {
    if (data) {
      setPlanetsArray(data.results);
    }
  }, [data]);

  return (
    <PlanetsContext.Provider value={ { planetsArray, filter, setFilter } }>
      {children}
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
