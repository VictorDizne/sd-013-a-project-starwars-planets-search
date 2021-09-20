import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import apiContext from './apiContext';

const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      const fetcher = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');

      const { results } = await fetcher.json();

      results.forEach((item) => {
        delete item.residents;
      });
      await setData(results);
      await setLoaded(true);
    };
    fetchApi();
    // data: retorna um array com os dados da api
    // loaded: retorna um true enquanto carrega, e depois um false quando está carregado.
  }, []);

  return (
    <apiContext.Provider value={ { data, loaded } }>
      {children}
    </apiContext.Provider>
  );
};

ApiProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ApiProvider;
