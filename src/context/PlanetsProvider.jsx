import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import getData from '../services';
import PlanetsContext from './PlanetsContext';

const QuestionProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [titles, setTitles] = useState([]);
  const [next, setNext] = useState('');
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData().then((planetsFromApi) => {
      setPlanets(planetsFromApi.results);
      setNext(planetsFromApi.next);
      setTitles(Object.keys(planetsFromApi.results[0]));
    });
  }, []);

  const value = {
    planets,
    next,
    titles,
  };

  return (
    <PlanetsContext.Provider value={ value }>
      {children}
    </PlanetsContext.Provider>
  );
};

QuestionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default QuestionProvider;
