import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
// import testData from '../testData';
import filterTable from '../utils/filterTable';

function PlanetsContextProvider({ children }) {
  const [data, setData] = useState({});
  const [planets, setPlanets] = useState([]);
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

  useEffect(() => {
    if (isPlanetsFilled) {
      filterTable({
        setPlanets,
        data,
        filterNumeric,
        filterName,
      });
    }
  }, [data, filterName, filterNumeric, isPlanetsFilled]);

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
