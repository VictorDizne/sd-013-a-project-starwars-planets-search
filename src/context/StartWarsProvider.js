import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StartWarsContext';

function StarWarsProvider({ children }) {
  const [dataPlanet, setDataPlanet] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();
      setDataPlanet(data.results);
    }
    fetchData();
  }, []);

  return (
    <StarWarsContext.Provider value={ dataPlanet }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.objectOf(Object).isRequired,
};

export default StarWarsProvider;
