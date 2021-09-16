import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import mockPlanets from '../utils/mockPlanets';

function PlanetsContextProvider({ children }) {
  const [data, setData] = useState({});
  const [planets, setPlanets] = useState(mockPlanets());
  const [isPlanetsFilled, setIsPlanetsFilled] = useState(false);
  const [columns, setColumns] = useState([]);
  const [filters, setFilters] = useState(
    {
      filterByName: {
        name: '',
      },

    },
  );

  const filterPlanets = () => {
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

  useEffect(filterPlanets, [filters]);

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
