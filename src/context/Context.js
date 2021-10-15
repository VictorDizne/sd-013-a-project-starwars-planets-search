import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import appContext from './appcontext';

export default function Provider({ children }) {
  const [planets1, setPlanets1] = useState([]);// primeiro fetch
  const [planets2, setPlanets2] = useState([]);// seta planets antigos
  const [nameFilter, setName] = useState('');// filtra nome
  const [compareValue, setCompareValue] = useState(0); // compara pelo valor qq eu escrever
  const [compareColumn, setCompareColumn] = useState('maior que'); // tipo de comparaçao
  const [coluna, setColuna] = useState('population'); // coluna para comparar
  const [allFilters, setAllfilters] = useState([]); // lista de filtros ex : [{value, type, coluna}, {value, type, coluna}]
  const [actualFilter, setActualFilter] = useState(0); // quantidade de filtros atuais
  const [selectColumns, setSelectColumns] = useState({
    rotation_period: 'rotation_period',
    orbital_period: 'orbital_period',
    diameter: 'diameter',
    surface_water: 'surface_water',
    population: 'population',
  });
  // const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState('');
  const [options, setOptions] = useState({
    name: 'name',
    rotation_period: 'rotation_period',
    orbital_period: 'orbital_period',
    diameter: 'diameter',
    surface_water: 'surface_water',
    population: 'population',
  });
  const [typeOrdenation, setOrdenation] = useState('name');
  const [button, setButton] = useState(0);
  // colunas
  /* const [filter, setFilter] = useState({
    column: coluna,
    comparison: compareColumn,
    value: compareValue,
  }); */
  // linha 14 ao 20 foi uma ideia a partir do projeto do victor diniz : link: https://github.com/tryber/sd-013-a-project-starwars-planets-search/blob/victor-diniz-project-starwars-planets-search/src/components/reducer.js
  useEffect(() => {
    async function fetchApi() {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((res) => res.json());
      if (typeOrdenation === 'name') {
        const s = results
          .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
        setPlanets1(s);
        setPlanets2(s);
      }
    }
    fetchApi();
  }, []);
  //  Desta linha ate a 80 eu consultei a logica do projeto de outro aluno: VictorDiniz Turma13-TA link: https://github.com/tryber/sd-013-a-project-starwars-planets-search/blob/victor-diniz-project-starwars-planets-search/src/components/reducer.js

  function setNewsPlanets(planets) {
    setPlanets1(planets);
  }
  /* async function fetchApi1() {
    const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const { results } = await fetch(endpoint).then((res) => res.json());
    return results;
  } */
  /* async function newOrder(tp) {
    if (check1) {
      // const r = await fetchApi1();
      const s = planets1
        .sort((a, b) => a[tp] - b[tp]);
      setPlanets1(s);
      console.log(planets1);
    } else {
      // const r = await fetchApi1();
      const s = planets1
        .sort((a, b) => b[tp] - a[tp]);
      setPlanets1(s);
      console.log(planets1);
    }
  } */
  useEffect(() => {
    if (button >= 0) {
      if (typeOrdenation !== 'name' && check2 === 'ASC') {
        const s = planets1
          .sort((a, b) => a[typeOrdenation] - b[typeOrdenation]);
        setPlanets1(s);
      }
      if (typeOrdenation !== 'name' && check2 === 'DESC') {
        const s = planets1
          .sort((a, b) => b[typeOrdenation] - a[typeOrdenation]);
        setPlanets1(s);
      }
    }
  }, [check2]);

  useEffect(() => {
    const newArr = planets2
      .filter((planet) => planet.name.toLowerCase().includes(nameFilter.toLowerCase()));
    setNewsPlanets(newArr);
  }, [nameFilter]);

  function clearFilter(filtro, o) {
    setPlanets1(planets2);
    const filterFiltros = allFilters.filter((item) => item[coluna] !== o);
    setAllfilters(filterFiltros);
    setColuna('population');
    console.log(filtro);
    setSelectColumns({ ...selectColumns, filtro });
    setCompareValue(0);
  }

  useEffect(() => {
    //  A logica eu consultei o projeto de outro aluno: VictorDiniz Turma13-TA link: https://github.com/tryber/sd-013-a-project-starwars-planets-search/blob/victor-diniz-project-starwars-planets-search/src/components/reducer.js
    if (actualFilter > 0) {
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
    console.log(planets2);
  }, [actualFilter]);

  const contextValue = {
    data: planets1,
    setPlanets1,
    planets2,
    setPlanets2,
    filters: {
      filterbyname: {
        name: nameFilter,
        setName,
      },
      filterByNumericValues: {
        column: coluna,
        comparison: compareColumn,
        value: compareValue,
      },
    },
    setColuna,
    setCompareValue,
    setCompareColumn,
    setAllfilters,
    allFilters,
    clearFilter,
    actualFilter,
    setActualFilter,
    selectColumns,
    setSelectColumns,
    // check1,
    // setCheck1,
    check2,
    setCheck2,
    options,
    setOptions,
    typeOrdenation,
    setOrdenation,
    // newOrder,
    button,
    setButton,
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
