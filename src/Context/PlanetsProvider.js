import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [firstObject, setFirstObject] = useState({});
  const [filterData, setFilterData] = useState([]);
  const [filterPlanet, setFilterPlanet] = useState({ filters: {
    filterByName: {
      name: '',
    },
  } });

  useEffect(() => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const fetchPlanets = async () => {
      const response = await fetch(url);
      const responseJson = await response.json();
      setData(responseJson.results);
      setFirstObject(responseJson.results[0]);
      setFilterData(responseJson.results);
    };
    fetchPlanets();
  }, []);

  const handleChange = ({ target: { value } }) => {
    setFilterPlanet({ filters: { filterByName: { name: value } } });
  };

  const objectProvider = {
    firstObject,
    data,
    filterPlanet,
    handleChange,
    filterData,
  };

  return (
    <PlanetsContext.Provider value={ { objectProvider } }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf().isRequired,
};

export default PlanetsProvider;
