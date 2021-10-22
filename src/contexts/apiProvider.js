import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import apiContext from './apiContext';

const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [dataFiltered, setDataFiltered] = useState([]);
  const [att, setAtt] = useState(false);
  const [filtering, setFiltering] = useState(false);
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
    order: {
      column: 'name',
      sort: 'ASC',
    },
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
    setDataFiltered(data
      .sort((a, b) => a[filters.order.column].localeCompare(b[filters.order.column])));
    if (filtering) {
      setDataFiltered(data);
      setFiltering(false);
    }
  }, [data, filtering]);

  useEffect(() => {
    setDataFiltered(data);
    const filterName = data
      .filter(({ name }) => name.includes(filters.filterByName.name));
    setDataFiltered(filterName);
  }, [filters.filterByName]);

  useEffect(() => {
    if (att) {
      if (filters.order.sort === 'ASC') {
        dataFiltered
          .sort((a, b) => a[filters.order.column].localeCompare(b[filters.order.column]))
          .sort((a, b) => (a[filters.order.column] - b[filters.order.column]));
      } else {
        dataFiltered
          .sort((a, b) => b[filters.order.column].localeCompare(a[filters.order.column]))
          .sort((a, b) => (b[filters.order.column] - a[filters.order.column]));
      }
      filters.filterByNumericValues.map(({ column, comparison, value }) => {
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
        console.log('atualizou');
        setDataFiltered(filtered);
        return setAtt(false);
      });
    }
  }, [att, dataFiltered, filters]);

  const states = {
    dataFiltered,
    data,
    loaded,
    setFilters,
    setFiltering,
    setAtt,
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
