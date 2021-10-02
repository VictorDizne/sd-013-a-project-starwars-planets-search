import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import apiContext from './apiContext';

const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [dataFiltered, setDataFiltered] = useState(data);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });

  useEffect(() => {
    const fetchApi = async () => {
      const fetcher = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');

      const { results } = await fetcher.json();

      results.forEach((item) => {
        delete item.residents;
      });
      setData(results);
      setLoaded(true);
    };
    fetchApi();

    // data: retorna um array com os dados da api
    // loaded: retorna um true enquanto carrega, e depois um false quando está carregado.
  }, []);

  useEffect(() => {
    const filteredName = data.filter((i) => i.name.includes(filters.filterByName.name));
    setDataFiltered(filteredName);
  }, [data, filters.filterByName.name]);

  useEffect(() => {
    filters.filterByNumericValues.map(() => {
      const { column, comparison, value } = filters
        .filterByNumericValues[filters.filterByNumericValues.length - 1];

      const filtered = dataFiltered.filter((i) => {
        switch (comparison) {
        case 'maior que':
          return Number(i[column]) > value;
        case 'menor que':
          return Number(i[column]) < value;
        case 'igual a':
          return i[column] === value;
        default:
          return i;
        }
      });
      // console.log(dataFiltered);
      return setDataFiltered(filtered);
    });
  }, [filters, filters.filterByNumericValues]);

  const states = {
    dataFiltered,
    data,
    loaded,
    setFilters,
    filters };

  return (
    <apiContext.Provider value={ states }>
      {children}
    </apiContext.Provider>
  );
};

ApiProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ApiProvider;
