import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import testData from '../testData';

function PlanetsContextProvider({ children }) {
  const [data, setData] = useState(testData);
  const [planets, setPlanets] = useState(data.results);
  const [isPlanetsFilled, setIsPlanetsFilled] = useState(false);
  const [columns, setColumns] = useState([]);
  const [filters, setFilters] = useState(
    {
      filterByName: {
        name: '',
      },

    },
  );

  const filterByName = () => {
    if (isPlanetsFilled) {
      const filteredResults = data.results
        .filter(({ name }) => {
          const nameToLowerCase = name.toLowerCase();
          const filterToLowerCase = filters.filterByName.name.toLowerCase();
          return nameToLowerCase.includes(filterToLowerCase);
        });
      setPlanets(filteredResults);
    }
  };

  useEffect(filterByName, [filters]);

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
        filters,
        setFilters,
        planets,
        setPlanets,
        filterByName,
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
