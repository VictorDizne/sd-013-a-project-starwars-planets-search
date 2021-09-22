import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextAPI from './ContextAPI';

const stateAPI = {
  data: {},
  filters: {
    filterByName: {
      name: '',
    },
  },
};

function Provider({ children }) {
  const [state, setState] = useState();

  const setFilterName = ({ target: { value } }) => {
    setState({ ...state, filters: { ...state.filters, filterByName: { name: value } } });
  };

  useEffect(() => {
    const fetchAPI = async () => {
      const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const { results } = await request.json();
      // Josue mandou o papo desse forEach aqui.
      results.forEach((result) => delete result.residents);
      setState({ ...stateAPI, data: results });
    };
    fetchAPI();
  }, []);

  return (
    <ContextAPI.Provider value={ { state, setFilterName } }>
      { children }
    </ContextAPI.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default Provider;
