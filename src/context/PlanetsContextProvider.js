import PropTypes from 'prop-types';
import React, { useState } from 'react';
import useMountEffect from '../hooks/useMountEffect';
import PlanetsContext from './PlanetsContext';

const PlanetsContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const fetchPlanets = () => {
    const fetching = async () => {
      if (!data || isFetching) return false;
      setIsFetching(true);

      const res = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const json = await res.json();
      const dataResults = json.results;

      dataResults.forEach((result) => {
        delete result.residents;
      });

      setData([...json.results]);
      setIsFetching(false);
    };

    fetching();
  };

  useMountEffect(fetchPlanets);

  const context = {
    data, setData, shouldFetch, setShouldFetch, isFetching, setIsFetching,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
};

PlanetsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsContextProvider;
