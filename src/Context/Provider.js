import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

// Configurações padrão de Context.
function Provider({ children }) {
  const [state, setState] = useState({ data: [] });
  useEffect(() => {
    const fetchApi = async () => {
      const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const response = await request.json();
      const data = response.results;
      const filteredData = data.filter((planet) => delete planet.residents);
      setState({ data: filteredData });
    };
    fetchApi();
  }, []);
  return (
    <Context.Provider value={ state }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
