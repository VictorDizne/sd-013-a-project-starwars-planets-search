import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import MyContext from '../context/myContext';
import getPlanetsApi from '../services/data';

function Provider({ children }) {
  const [planets, Setplanets] = useState([]);
  const [titles, setTitles] = useState([]);
  const [name, setName] = useState('');
  useEffect(() => {
    async function fetchData() {
      try {
        const { results } = await getPlanetsApi();
        Setplanets({ results });
        setTitles(Object.keys(results[0]));
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const context = {
    data: planets,
    filterByName: {
      name,
    },
    setName,
    titles,
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
