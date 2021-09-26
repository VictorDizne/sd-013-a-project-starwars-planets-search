import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

export default function MyProvider({ children }) {
  const [data, setData] = useState([]);
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
    <MyContext.Provider value={ { data, setData } }>
      { children }
    </MyContext.Provider>
  );
}
MyProvider.propTypes = {
  Children: PropTypes.shape(),
}.isRequired;
