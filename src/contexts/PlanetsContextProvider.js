import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import testData from '../testData';

function PlanetsContextProvider({ children }) {
  const [data, setData] = useState(testData);
  const [planets, setPlanets] = useState(data.results);
  const [isPlanetsFilled, setIsPlanetsFilled] = useState(false);
  const [columns, setColumns] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterNumeric, setFilterNumeric] = useState({
    column: 'population', comparison: 'maior que', value: 0,
  });
  // const [filterPopulation, setFilterPopulation] = useState('');
  // const [filterOrbital, setFilterOrbital] = useState('');
  // const [filterDiameter, setFilterDiameter] = useState('');

  const filterByName = () => {
    const filteredResults = data.results.filter(({ name }) => {
      const nameToLowerCase = name.toLowerCase();
      const filterToLowerCase = filterName.toLowerCase();
      return nameToLowerCase.includes(filterToLowerCase);
    });
    setPlanets(filteredResults);
  };

  useEffect(filterByName, [filterName]);

  const filterByColumn = () => {
    const filteredResults = planets.filter((planet) => {
      const columnAsNumber = Number(planet[filterNumeric.column]);
      const valueAsNumber = Number(filterNumeric.value);

      switch (filterNumeric.comparison) {
      case 'maior que':
        return columnAsNumber > valueAsNumber;
      case 'menor que':
        return columnAsNumber < valueAsNumber;
      case 'igual a':
        return columnAsNumber === valueAsNumber;
      default:
        return true;
      }
    });

    setPlanets(filteredResults);
  };

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const json = await response.json();
      setData(json);
      setPlanets(json.results);
      setIsPlanetsFilled(true);
    }
    getData();
  }, []);

  return (
    <PlanetsContext.Provider
      value={ {
        data,
        setData,
        isPlanetsFilled,
        setIsPlanetsFilled,
        columns,
        setColumns,
        filterName,
        setFilterName,
        planets,
        setPlanets,
        filterByName,
        filterNumeric,
        setFilterNumeric,
        filterByColumn,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsContextProvider;
