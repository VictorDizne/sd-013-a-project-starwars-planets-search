import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import getStarWarsPlanets from '../services/starWarsAPI';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [key, setKey] = useState([]);

  const fetchPlanets = async () => {
    const { results } = await getStarWarsPlanets();
    results.forEach((el) => delete el.residents);
    setData(results);
    setKey(Object.keys(results[0]));
    setIsFetching(false);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <StarWarsContext.Provider value={ { data, isFetching, key } }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
