import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import MyContext from '../context/myContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  useEffect(() => {
    async function fetchdata() {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const fetchUrl = await fetch(url);
      const { results } = await fetchUrl.json();
      setData(results);
    }
    fetchdata();
  }, []);

  const context = {
    data,
    setData,
    filters: {
      filterByName: {
        name,
      },
    },
    setName,
  };

  return (
    <MyContext.Provider value={ context }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
