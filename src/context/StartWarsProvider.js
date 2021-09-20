import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StartWarsContext';

function StarWarsProvider({ children }) {
  const [dataPlanet, setDataPlanet] = useState([]);
  const [filters, setFilters] = useState(
    {
      filterByName: {
        name: '',
      },
    },
  );

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();
      setDataPlanet(data.results);
    }
    fetchData();
  }, []);

  const contextValue = {
    dataPlanet,
    setDataPlanet,
    filters,
    setFilters,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.arrayOf,
}.isRequired;

export default StarWarsProvider;
