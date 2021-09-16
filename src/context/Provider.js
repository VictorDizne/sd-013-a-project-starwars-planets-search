import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [urlApi, setUrlApi] = useState('https://swapi-trybe.herokuapp.com/api/planets/');
  const [data, setData] = useState('');

  const fetchApi = async () => {
    const response = await fetch(urlApi)
      .then((results) => results.json())
      .then((fetchData) => fetchData.results);
    setData(response);
  };

  useEffect(() => {
    if (urlApi !== '') {
      fetchApi();
    }
  });

  return (
    <main>
      <Context.Provider value={ { setUrlApi, data } }>
        {children}
      </Context.Provider>
    </main>
  );
}

Provider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
