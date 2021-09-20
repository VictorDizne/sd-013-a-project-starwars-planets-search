import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import apiContext from './apiContext';

const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });
  const [dataFiltered, setDataFiltered] = useState(data);

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

  useEffect(() => {
    const filteredName = data.filter((i) => i.name.includes(filters.filterByName.name));
    setDataFiltered(filteredName);
  }, [data, filters.filterByName.name]);

  return (
    <apiContext.Provider value={ { dataFiltered, data, loaded, setFilters, filters } }>
      {children}
    </apiContext.Provider>
  );
};

ApiProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ApiProvider;
