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
    setDataFiltered(data);
    if (filtering) {
      setFiltering(false);
      return setAtt(true);
    }
  }, [data, filtering]);

  useEffect(() => {
    if (att) {
      const arr = filtering ? data : dataFiltered;
      filters.filterByNumericValues.map(({ column, comparison, value }) => {
        const filtered = arr.filter((i) => {
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
        }).filter(({ name }) => name.includes(filters.filterByName.name));
        console.log('atualizou');
        // console.log(dataFiltered);
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
