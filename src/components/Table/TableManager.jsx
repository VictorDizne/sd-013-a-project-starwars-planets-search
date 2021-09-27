import React, { useContext, useEffect, useState } from 'react';
import PlanetContext from '../../context/PlanetContext';
import { notEqual, orderByColumn } from '../../util';
import usePrevious from '../../util/customHooks';
import Table from './Table';

const TableManager = () => {
  // console.log('Rendering TableManager');
  const [filteredPlanets, setFilteredPlanets] = useState(false);
  const { filter, planets } = useContext(PlanetContext);
  const [componentDidMount, setComponetDidMount] = useState(false);
  const prevFilters = usePrevious(filter);

  useEffect(() => { setComponetDidMount(true); }, [componentDidMount]);

  useEffect(() => { // ao atualizar o filtro Númerico ou a SearchBar atualiza a tabela
    const { filters: { filterByName, filterByNumericValues, order } } = filter;
    const filterPlanets = () => (
      planets.filter((planet) => planet.name.includes(filterByName.name) // Verifica se o planeta contém o texto da searchBar
        && filterByNumericValues.every(({ column, comparison, value }) => { // Verifca se o planeta atende todos os filtros numéricos
          if (planet[column] === 'unknown') return false; // como unknown deve ser tratado pela aplicação ??????
          switch (comparison) { // "reducer" de comparações
          case 'maior que':
            return (Number(planet[column]) > value);
          case 'igual a':
            return (Number(planet[column]) === value);
          case 'menor que':
            return (Number(planet[column]) < value);
          default:
            throw new Error('Unknow Comparisson Value in ../NumericFilter.jsx L21');
          }
        })));
    if (componentDidMount) {
      const filterDidUpdated = notEqual(prevFilters, filter);
      // const filterName = filterByName.name !== (prevFilters.filters.filterByName.name); // alterou o filterByName ?
      // const filterNumericValues = filterByNumericValues.length !== (
      //   prevFilters.filters.filterByNumericValues.length); // adicionou ou removeu algum filtro numérico ?
      // const filterOrder = notEqual(prevFilters.filters.order, order); // alterou a ordem da coluna ?
      // const filterDidUpdated = (filterName || filterNumericValues || filterOrder); // Então atualizar a tabela.Simula o ComponentDidUpdate para filtros

      if (filterDidUpdated) setFilteredPlanets(orderByColumn(filterPlanets(), order)); // qualquer alteração no filtro a tabela é atualizada
    }
  }, [componentDidMount, filter, filteredPlanets, planets, prevFilters]);

  function handlePlanetData() { // para não criar um elemento para loading enquanto a requisação não é completada
    return (!filteredPlanets ? planets : filteredPlanets);
  }

  return (
    <Table data={ handlePlanetData() } />
  );
};

export default TableManager;
