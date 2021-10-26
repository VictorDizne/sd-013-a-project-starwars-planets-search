import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
  const { request, data } = useFetch();
  const [planets, setPlanets] = useState([]);
  const [aux, setAux] = useState(false);
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      order: {
        column: 'name',
        sort: 'ASC',
      },
      filterByNumericValues: [],
    },
  });

  useEffect(() => {
    request('https://swapi-trybe.herokuapp.com/api/planets/?format=json');
  }, [request]);

  useEffect(() => {
    if (data) {
      setPlanets(data.results);
    }
  }, [data]);

  const value = {
    planets,
    filter,
    setFilter,
    aux,
    setAux,
  };

  return (
    <MyContext.Provider value={ value }>
      {children}
    </MyContext.Provider>
  );
};

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
