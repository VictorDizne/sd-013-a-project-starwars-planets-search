import React, { useEffect, useState } from 'react';
import ClearFilter from './ClearFilter';
import { usePlanets } from './PlanetsContext';

const MENOS_UM = -1;

const SearchBar = () => {
  // recebendo do custom hook usePlanets quais estados vou usar
  const { setPlanetsArray, filteredPlanets, column, setColumn,
    columnAux, setColumnAux, setFilter } = usePlanets();
  // const name é o que vai ser digitado
  const [name, setName] = useState('');
  // estado column é o 1 option
  // estado comparison é o 2 option
  const [comparison, setComparison] = useState('maior que');
  // estado value é o valor numero que sera usado na comparação
  const [value, setValue] = useState(0);
  const [orderBy, setOrderBy] = useState('name');
  const [sort, setSort] = useState('ASC');

  function initialState() {
    setName('');
    setColumn('population');
    setComparison('maior que');
    setValue(0);
    setColumnAux([]);
    setOrderBy('name');
    setSort('ASC');
  }

  // o que for digitado nesse componente vai passar pro estado dos filtros
  useEffect(() => {
    setFilter(
      { filters: { filterByName: { name },
        filterByNumericValues: { column, comparison, value },
        order: { column: orderBy, sort } } },
    );
  }, [column, comparison, name, orderBy, setFilter, sort, value]);
  // função submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      if (comparison === 'maior que') {
        const newArr = filteredPlanets.filter(
          (planet) => (Number(planet[column]) > value) && (planet[column] !== 'unknown'),
        );
        setPlanetsArray(newArr);
        setColumnAux([...columnAux, column]);
      } else if (comparison === 'menor que') {
        const newArr = filteredPlanets.filter(
          (planet) => (Number(planet[column]) < value) && (planet[column] !== 'unknown'),
        );
        setPlanetsArray(newArr);
        setColumnAux([...columnAux, column]);
      } else {
        const newArr = filteredPlanets.filter(
          (planet) => (Number(planet[column]) === value)
          && (planet[column] !== 'unknown'),
        );
        setColumnAux([...columnAux, column]);
        setPlanetsArray(newArr);
      }
    }
  };

  function nameFunc() {
    if (sort === 'ASC') {
      const results = filteredPlanets.sort((a, b) => {
        if (a[orderBy].toLowerCase() < b[orderBy].toLowerCase()
        ) return MENOS_UM;
        if (a[orderBy].toLowerCase() > b[orderBy].toLowerCase()
        ) return 1;
        return 0;
      });
      setPlanetsArray(results);
    }
    if (sort === 'DESC') {
      const results = filteredPlanets.sort((a, b) => {
        if (b[orderBy].toLowerCase() < a[orderBy].toLowerCase()
        ) return MENOS_UM;
        if (b[orderBy].toLowerCase() > a[orderBy].toLowerCase()
        ) return 1;
        return 0;
      });
      setPlanetsArray(results);
    }
  }

  function orbFunc() {
    if (sort === 'ASC') {
      const results = filteredPlanets.sort((a, b) => a[orderBy] - b[orderBy]);
      setPlanetsArray(results);
    }
    if (sort === 'DESC') {
      const results = filteredPlanets.sort((a, b) => b[orderBy] - a[orderBy]);
      setPlanetsArray(results);
    }
  }

  const handleClick = () => {
    if (orderBy === 'name') {
      nameFunc();
    }

    if (orderBy === 'orbital_period') {
      orbFunc();
    }
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="search planet"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
          data-testid="name-filter"
        />
      </form>

      <form onSubmit={ (e) => handleSubmit(e) }>
        <select
          name="column-filter"
          id="column-filter"
          value={ column }
          onChange={ ({ target }) => { setColumn(target.value); } }
          data-testid="column-filter"
        >
          {!columnAux.includes('population')
          && <option value="population">population</option>}
          {!columnAux.includes('orbital_period')
          && <option value="orbital_period">orbital_period</option>}
          {!columnAux.includes('diameter')
          && <option value="diameter">diameter</option>}
          {!columnAux.includes('rotation_period')
          && <option value="rotation_period">rotation_period</option>}
          {!columnAux.includes('surface_water')
          && <option value="surface_water">surface_water</option>}
        </select>

        <select
          name="comparison-filter"
          id="comparison-filter"
          value={ comparison }
          onChange={ ({ target }) => { setComparison(target.value); } }
          data-testid="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>

        <input
          type="text"
          name="value-filter"
          id="value-filter"
          placeholder="valor numérico"
          value={ value }
          onChange={ ({ target }) => { setValue(Number(target.value)); } }
          data-testid="value-filter"
        />

        <button
          type="submit"
          id="button-filter"
          data-testid="button-filter"
        >
          Filtrar
        </button>

        <label htmlFor="column">
          <select
            name="column"
            id="column"
            data-testid="column-sort"
            onChange={ ({ target }) => { setOrderBy(target.value); } }
          >
            <option value="name">name</option>
            <option value="orbital_period">orbital_period</option>
          </select>
        </label>

        <label htmlFor="asc">
          <input
            type="radio"
            name="order"
            id="asc"
            value="ASC"
            onClick={ () => setSort('ASC') }
            defaultChecked
            data-testid="column-sort-input-asc"
          />
          ASC
        </label>

        <label htmlFor="desc">
          <input
            type="radio"
            name="order"
            id="desc"
            value="DESC"
            onClick={ () => setSort('DESC') }
            data-testid="column-sort-input-desc"
          />
          DESC
        </label>

        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ () => handleClick() }
        >
          Ordenar
        </button>
        <ClearFilter />
        <button type="button" onClick={ () => initialState() }>Resetar filtros</button>
      </form>
    </>
  );
};

export default SearchBar;
