import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [state, setState] = useState({ planets: [], isLoading: true });

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const { results } = await response.json();
      setState({ planets: results, isLoading: false });
    };
    fetchApi();
  }, []);

  const completeState = {
    state,
    setState,
  };

  return (
    <Context.Provider value={ completeState }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
