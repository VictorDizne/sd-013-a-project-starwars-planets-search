import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchSWAPI from '../utils/fetchSWAPI';
import planetContext from './planetContext';

const PlanetProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [planetsFilteredByName, setPlanetsFilteredByName] = useState([]);
  const [planetsWithAllFilters, setPlanetsWithAllFilters] = useState([]);
  const [loadFilters, setLoadFilters] = useState(false);
  const [deletedFilter, setDeletedFilter] = useState(null);
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
      setPlanets(response);
      setPlanetsFilteredByName(response);
    };
    request();
  }, []);

  useEffect(() => {
    if (deletedFilter) {
      numericFilters.forEach((filter) => {
        if (filter.column === deletedFilter) {
          const elemIndex = numericFilters.indexOf(deletedFilter);
          numericFilters.splice(elemIndex, 1);
        }
      });
      setDeletedFilter(null);
    }
  }, [deletedFilter, numericFilters]);

  useEffect(() => {
    const filteredArray = planets.filter((planet) => (
      planet.name.includes(nameFiltered)));
    if (filteredArray.length === 0) {
      setNotFound(true);
    } else {
      setPlanetsFilteredByName(filteredArray);
      setLoadFilters(true);
      setNotFound(false);
    }
  }, [nameFiltered, planets]);

  const applyNumericFilters = (array, arrWithFilters) => {
    if (array.comparison === 'maior que') {
      return arrWithFilters.filter((dado) => (
        Number(dado[array.column]) > Number(array.filterValue)));
    } if (array.comparison === 'igual a') {
      return arrWithFilters.filter((dado) => (
        Number(dado[array.column]) === Number(array.filterValue)));
    } if (array.comparison === 'menor que') {
      return arrWithFilters.filter((dado) => (
        Number(dado[array.column]) < Number(array.filterValue)));
    }
  };

  useEffect(() => {
    if (loadFilters) {
      setNotFound(false);
      setLoadFilters(false);
      let arrWithFilters = planetsFilteredByName;
      if (numericFilters.length !== 0) {
        numericFilters.forEach((filter) => {
          arrWithFilters = applyNumericFilters(filter, arrWithFilters);
        });
      }
      if (arrWithFilters.length === 0) {
        setNotFound(true);
      } else if (arrWithFilters.length !== undefined) {
        setPlanetsWithAllFilters(arrWithFilters);
      }
    }
  }, [numericFilters, planetsFilteredByName, loadFilters]);

  const context = {
    setNameFiltered,
    setNumericFilters,
    setOptions,
    setLoadFilters,
    setDeletedFilter,
    numericFilters,
    planetsWithAllFilters,
    options,
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
