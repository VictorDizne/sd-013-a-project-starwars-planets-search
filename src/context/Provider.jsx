import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextAPI from './ContextAPI';

const stateAPI = {
  data: {},
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  },
};

function Provider({ children }) {
  const [state, setState] = useState();
  // Rogerio me ajudou a entender esses filtros
  const setFilterName = ({ target: { value } }) => {
    setState({ ...state, filters: { ...state.filters, filterByName: { name: value } } });
  };

  const setFilterNumeric = (param) => {
    setState({ ...state,
      filters: { ...state.filters,
        filterByNumericValues: [
          ...state.filters.filterByNumericValues, param] } });
  };

  const removeFilter = (param) => {
    setState({ ...state,
      filters: { ...state.filters,
        filterByNumericValues: [...state.filters.filterByNumericValues.filter(
          (item) => item.column !== param,
        )] } });
  };

  const setOrdenation = (column = 'name', sort = 'ASC') => {
    setState({ ...state,
      filters: { ...state.filters,
        order: { column, sort } } });
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
    <ContextAPI.Provider
      value={ { state,
        setFilterName,
        setFilterNumeric,
        removeFilter,
        setOrdenation } }
    >
      { children }
    </ContextAPI.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
