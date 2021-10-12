import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import appContext from './appcontext';

export default function Provider({ children }) {
  const [planets1, setPlanets1] = useState([]);
  const [planets2, setPlanets2] = useState([]);
  const [nameFilter, setName] = useState('');
  const [compareValue, setCompareValue] = useState(0);
  const [compareColumn, setCompareColumn] = useState('maior que');
  const [coluna, setColuna] = useState('surface_water');
  const [allFilters, setAllfilters] = useState([]);
  const [actualFilter, setActualFilter] = useState(0);
  const [selectColumns, setSelectColumns] = useState({
    rotation_period: 'rotation_period',
    orbital_period: 'orbital_period',
    diameter: 'diameter',
    surface_water: 'surface_water',
    population: 'population',
  });
  // linha 14 ao 20 foi uma ideia a partir do projeto do victor diniz : link: https://github.com/tryber/sd-013-a-project-starwars-planets-search/blob/victor-diniz-project-starwars-planets-search/src/components/reducer.js
  useEffect(() => {
    async function fetchApi() {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((res) => res.json());

      setPlanets1(results);
      setPlanets2(results);
    }
    fetchApi();
  }, []);
  //  Desta linha ate a 80 eu consultei a logica do projeto de outro aluno: VictorDiniz Turma13-TA link: https://github.com/tryber/sd-013-a-project-starwars-planets-search/blob/victor-diniz-project-starwars-planets-search/src/components/reducer.js

  function setNewsPlanets(planets) {
    setPlanets1(planets);
  }

  useEffect(() => {
    const newArr = planets2
      .filter((planet) => planet.name.toLowerCase().includes(nameFilter.toLowerCase()));
    setNewsPlanets(newArr);
  }, [nameFilter]);

  function clearFilter(filtro) {
    setPlanets1(planets2);
    const filterFiltros = allFilters.filter((item) => item[coluna] !== filtro);
    setAllfilters(filterFiltros);
    setColuna('surface_water');
    setCompareValue(0);
  }

  useEffect(() => {
    //  A logica eu consultei o projeto de outro aluno: VictorDiniz Turma13-TA link: https://github.com/tryber/sd-013-a-project-starwars-planets-search/blob/victor-diniz-project-starwars-planets-search/src/components/reducer.js
    if (allFilters.length > 0) {
      if (compareColumn === 'maior que') {
        const newApi = planets2
          .filter((planet) => parseInt(planet[coluna], 10) > parseInt(compareValue, 10));
        setNewsPlanets(newApi);
      }
      if (compareColumn === 'menor que') {
        const newApi = planets2
          .filter((planet) => parseInt(planet[coluna], 10) < parseInt(compareValue, 10));
        setNewsPlanets(newApi);
      }
      if (compareColumn === 'igual a') {
        const newPlanets = planets2
          .filter((planet) => (
            parseInt(planet[coluna], 10) === parseInt(compareValue, 10)));
        setNewsPlanets(newPlanets);
      }
    }
    console.log(planets1);
  }, [actualFilter]);

  const contextValue = {
    planets1,
    filters: {
      filterbyname: {
        name: nameFilter,
        setName,
      },
      compareColumn,
      setCompareColumn,
      filterByNumericValues: {
        column: coluna,
        setColuna,
        comparison: compareColumn,
        setCompareColumn,
        value: compareValue,
        setCompareValue,
      },
    },
    setAllfilters,
    allFilters,
    clearFilter,
    actualFilter,
    setActualFilter,
    selectColumns,
    setSelectColumns,
  };
  return (
    <appContext.Provider value={ contextValue }>
      {children}
    </appContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
