import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import fetchSWAPI from '../utils/fetchSWAPI';
import planetContext from './planetContext';

const PlanetProvider = ({ children }) => {
  const firstRender = useRef(true);
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [nameFiltered, setNameFiltered] = useState('');
  const [numericFilters, setNumericFilters] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const arrOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const [options, setOptions] = useState(arrOptions);

  useEffect(() => {
    const request = async () => {
      const response = await fetchSWAPI();
      setData(response);
      setPlanets(response);
    };
    request();
  }, []);

  useEffect(() => {
    if (!firstRender.current) {
      const filteredArray = planets.filter((planet) => (
        planet.name.includes(nameFiltered)));
      if (filteredArray.length === 0) {
        setNotFound(true);
      } else {
        setData(filteredArray);
        setNotFound(false);
      }
    }
  }, [nameFiltered, planets]);

  useEffect(() => {
    if (!firstRender.current) {
      let teste = 0;
      if (numericFilters.comparison === 'bigger') {
        teste = planets.filter((dado) => (
          Number(dado[numericFilters.column]) > Number(numericFilters.filterValue)));
        setData(teste);
      } else if (numericFilters.comparison === 'equal') {
        teste = planets.filter((dado) => (
          Number(dado[numericFilters.column]) === Number(numericFilters.filterValue)));
        setData(teste);
      } else if (numericFilters.comparison === 'smaller') {
        teste = planets.filter((dado) => (
          Number(dado[numericFilters.column]) < Number(numericFilters.filterValue)));
        setData(teste);
      }
    } else {
      firstRender.current = false;
    }
  }, [numericFilters, planets]);

  const context = {
    data,
    setNameFiltered,
    setNumericFilters,
    options,
    setOptions,
    notFound,
  };

  return (
    <planetContext.Provider value={ context }>
      {children}
    </planetContext.Provider>
  );
};

PlanetProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default PlanetProvider;
