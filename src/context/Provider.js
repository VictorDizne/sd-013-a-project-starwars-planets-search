import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterText, setFilterText] = useState('');
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(({ results }) => setData(results));
  });

  const state = {
    data,
    filters: {
      filterText,
    },
    setFilterText,
    setData,
  };

  return (
    <Context.Provider value={ state }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default Provider;
