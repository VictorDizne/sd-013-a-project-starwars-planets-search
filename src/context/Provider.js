import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

const INITIAL_FILTER = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};
// 3 -  criação do provider.
function Provider({ children }) {
  const [statewars, setStatewars] = useState([]);
  const [filterwars, setfilterWars] = useState(INITIAL_FILTER);
  // 4 - os estados basicos que vão conter a resposta do filtro e da API.
  useEffect(() => {
    const response = async () => {
      const api = 'https://swapi-trybe.herokuapp.com/api/planets/';

      const { results } = await fetch(api).then((result) => result.json());

      results.forEach((item) => {
        delete item.residents;
      });

      setStatewars(results);
    };

    response();
  }, []);
  // 5 - por aqui passamos os states e setstates.
  const planetContexValue = { statewars, filterwars, setfilterWars };
  return (
    <MyContext.Provider value={ planetContexValue }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
