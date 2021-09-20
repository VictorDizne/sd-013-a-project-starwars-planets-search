import React, { useContext, useEffect, useState } from 'react';
import PlanetContext from '../../context/PlanetContext';
import Table from './Table';

const TableManager = () => {
  const [filteredPlanets, setFilteredPlanets] = useState();
  const { filter, planets } = useContext(PlanetContext);
  const [componentDidMount, setComponetDidMount] = useState(false);
  // const [prevFilter, setPrevFilter] = useState();
  // ao montar o componente gera uma cópia dos planetas que podem ser filtrados
  useEffect(() => {
    if (!componentDidMount) {
      setFilteredPlanets([...planets]);
      setComponetDidMount(true);
      // setPrevFilter(filter);
    }
  }, [componentDidMount, filter, planets]);

  // ao atualizar o texto na searchbar executar um filtro de nome nos componetes
  useEffect(() => {
    function filterPlanets() {
      const {
        filters: {
          filterByName,
        },
      } = filter;

      const INPUT_FROM_SEARCHBAR = filterByName.name;

      const planetData = planets
        .filter((planet) => planet.name.includes(INPUT_FROM_SEARCHBAR));
      return planetData;
    }

    // if (filteredPlanets) filterPlanets();
    // setFilteredPlanets(filterPlanets());
    if (componentDidMount) {
      console.log('L37', filter);
      console.log('L38', filter.filters.filterByName.name);
      // console.log(prevFilter);
      // console.log('L39', filteredPlanets);
      setFilteredPlanets(filterPlanets());
    }
  }, [componentDidMount, filter, planets]);

  return (<Table data={ filteredPlanets } />);
};

export default TableManager;
