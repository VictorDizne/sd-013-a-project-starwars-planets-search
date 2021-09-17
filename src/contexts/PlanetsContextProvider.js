import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import testData from '../testData';
import filterTable from '../utils/filterTable';

function PlanetsContextProvider({ children }) {
  const [data, setData] = useState(testData);
  const [planets, setPlanets] = useState(data.results);
  const [isPlanetsFilled, setIsPlanetsFilled] = useState(false);
  const [columns, setColumns] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterNumeric, setFilterNumeric] = useState([]);
  const [columnsFilter, setColumnsFilter] = useState(
    [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water'],
  );
  // const [filterPopulation, setFilterPopulation] = useState('');
  // const [filterOrbital, setFilterOrbital] = useState('');
  // const [filterDiameter, setFilterDiameter] = useState('');

  useEffect(() => {
    filterTable({
      setPlanets,
      data,
      filterNumeric,
      filterName,
    });
  }, [data, filterName, filterNumeric]);

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
        filterNumeric,
        setFilterNumeric,
        columnsFilter,
        setColumnsFilter,
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
