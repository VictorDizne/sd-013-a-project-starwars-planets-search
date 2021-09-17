import React, { useEffect, useState } from 'react';
import fetchSWAPI from '../utils/fetchSWAPI';
import planetContext from './planetContext';

const PlanetProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [nameFiltered, setNameFiltered] = useState('');
  const [ numericFilters, setNumericFilters ] = useState([]);
  const [options, setOptions] =  useState(["population", "orbital_period", "diameter", "rotation_period", "surface_water"])

  useEffect(() => {
    const request = async () => {
      const response = await fetchSWAPI();
      setData(response);
      setPlanets(response);
    };
    request();
  }, []);

  useEffect(() => {
    const filteredArray = planets.filter((planet) => planet.name.includes(nameFiltered));
    setData(filteredArray);
  }, [nameFiltered, planets]);

  useEffect(() => {
    let teste = 0;
    if(numericFilters.comparison === "bigger") {
      teste = data.filter((dado) => Number(dado[numericFilters.column]) > Number(numericFilters.filterValue));
    setData(teste);
    } else if(numericFilters.comparison === "equal") {
      teste = data.filter((dado) => Number(dado[numericFilters.column]) === Number(numericFilters.filterValue));
      setData(teste);
    } else {
      teste = data.filter((dado) => Number(dado[numericFilters.column]) < Number(numericFilters.filterValue));
      setData(teste);
    }
  }, [numericFilters])

  const context = {
    data,
    setNameFiltered,
    setNumericFilters,
    options,
    setOptions,
  };

  return (
    <planetContext.Provider value={ context }>
      {children}
    </planetContext.Provider>
  );
};

export default PlanetProvider;
