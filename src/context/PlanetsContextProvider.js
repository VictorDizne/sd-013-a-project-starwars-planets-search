import PropTypes from 'prop-types';
import React, { useState } from 'react';
import useMountEffect from '../hooks/useMountEffect';
import PlanetsContext from './PlanetsContext';

const initialFilter = {
  filterByName: {
    name: '',
  },
};

const PlanetsContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [filter, setFilter] = useState(initialFilter);

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
      console.log(data);
      setIsFetching(false);
    };

    fetching();
  };

  useMountEffect(fetchPlanets);

  const context = {
    data, setData, isFetching, filter, setFilter,
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
