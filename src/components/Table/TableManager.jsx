import React, { useContext, useEffect, useState } from 'react';
import PlanetContext from '../../context/PlanetContext';
import Table from './Table';

const TableManager = () => {
  const [filteredPlanets, setFilteredPlanets] = useState();
  const { filter, planets } = useContext(PlanetContext);
  const [componentDidMount, setComponetDidMount] = useState(false);
  const [prevFilter, setPrevFilter] = useState();
  const prevFilters = usePrevious(filter);

  useEffect(() => { // ao montar o componente gera uma cópia dos planetas que podem ser filtrados
    if (!componentDidMount) {
      setFilteredPlanets([...planets]);
      setComponetDidMount(true);
      setPrevFilter(filter);
    }
  }, [componentDidMount, filter, planets]);

  useEffect(() => { // ao atualizar o filtro Númerico ou a SearchBar atualiza a tabela
    function filterPlanets() {
      const { filters: { filterByName } } = filter;
      const INPUT_FROM_SEARCHBAR = filterByName.name;
      console.log(filter, prevFilters);
      const planetData = planets
        .filter((planet) => planet.name.includes(INPUT_FROM_SEARCHBAR));
      return planetData;
    }

    if (componentDidMount) {
      setFilteredPlanets(filterPlanets());
    }
  }, [componentDidMount, filter, planets, prevFilters]);

  return (
    <Table data={ componentDidMount ? filteredPlanets : planets } />
  );
};

export default TableManager;
