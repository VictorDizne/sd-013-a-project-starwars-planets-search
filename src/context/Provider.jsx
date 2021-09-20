import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextAPI from './ContextAPI';

const stateAPI = {
  data: {},
};

function Provider({ children }) {
  const [state, newState] = useState();

  useEffect(() => {
    const fetchAPI = async () => {
      const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await request.json();
      newState({ ...stateAPI, data: data.results });
    };
    fetchAPI();
  }, []);

  return (
    <ContextAPI.Provider value={ state }>
      { children }
    </ContextAPI.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default Provider;
