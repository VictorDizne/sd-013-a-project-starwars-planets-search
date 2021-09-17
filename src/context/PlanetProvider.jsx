import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

const PlanetProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [searchText, setSearchText] = useState('');

  const getData = async () => {
    const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const result = await fetch(endpoint).then((response) => response.json());
    setData(result.results);
    setPlanets(result.results);
    // console.log(result.results);
  };

  const handleChange = ({ target: { value } }) => {
    setSearchText(value);
  };

  const contextValue = {
    data,
    planets,
    handleChange,
    searchText,
  };

  const filter = () => {
    const filteredPlanetsByName = data.filter((item) => item.name.includes(searchText));
    setPlanets(filteredPlanetsByName);
  };

  useEffect(() => { getData(); }, []);
  useEffect(filter, [searchText]);

  return (
    <PlanetContext.Provider value={ contextValue }>
      {children}
    </PlanetContext.Provider>
  );
};

export default PlanetProvider;

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
