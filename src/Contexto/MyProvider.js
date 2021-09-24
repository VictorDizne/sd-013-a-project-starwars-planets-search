import React, { useEffect, useState } from 'react';
// import { Children } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [data, setData] = useState([]);

  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [{ column: '', comparison: '', value: '' }],
  });

  const fetchStar = () => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((body) => {
        const del = body.results.map(({ residents, ...rest }) => rest);
        setData(del);
      });
  };

  useEffect(fetchStar, []);

  return (
    <MyContext.Provider value={ { data, setData, filters, setFilters } }>
      { children }
    </MyContext.Provider>
  );
}
MyProvider.propTypes = {
  children: PropTypes.shape(),
}.isRequired;

export default MyProvider;

// Projeito feito com ajuda do colega Adriano Monteiro da turma 13A
