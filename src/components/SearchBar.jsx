import React, { useEffect, useState } from 'react';
import { usePlanets } from './PlanetsContext';

const SearchBar = () => {
  // recebendo do custom hook usePlanets quais estados vou usar
  const { data, setPlanetsArray, setFilter } = usePlanets();
  // const name é o que vai ser digitado
  const [name, setName] = useState('');
  // estado column é o 1 option
  const [column, setColumn] = useState('population');
  // estado comparison é o 2 option
  const [comparison, setComparison] = useState('maior que');
  // estado value é o valor numero que sera usado na comparação
  const [value, setValue] = useState('');
  const [columnAux, setColumnAux] = useState('');

  // o que for digitado nesse componente vai passar pro estado dos filtros
  useEffect(() => {
    setFilter({ filters: { filterByName: { name } } });
  }, [name, setFilter]);
  // const columns = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  // função submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length > 0) {
      if (comparison === 'maior que') {
        const newArr = data.results.filter(
          (planet) => (Number(planet[column]) > value) && (planet[column] !== 'unknown'),
        );
        setPlanetsArray(newArr);
        setColumnAux(column);
      } else if (comparison === 'menor que') {
        const newArr = data.results.filter(
          (planet) => (Number(planet[column]) < value) && (planet[column] !== 'unknown'),
        );
        setPlanetsArray(newArr);
        setColumnAux(column);
      } else {
        const newArr = data.results.filter(
          (planet) => (planet[column] === value) && (planet[column] !== 'unknown'),
        );
        setColumnAux(column);
        setPlanetsArray(newArr);
      }
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
          {columnAux !== 'population'
          && <option name="column-filter" value="population">population</option>}
          {columnAux !== 'orbital_period'
          && <option value="orbital_period">orbital_period</option>}
          {columnAux !== 'diameter'
          && <option value="diameter">diameter</option>}
          {columnAux !== 'rotation_period'
          && <option value="rotation_period">rotation_period</option>}
          {columnAux !== 'surface_water'
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
          onChange={ ({ target }) => { setValue(target.value); } }
          data-testid="value-filter"
        />

        <button
          type="submit"
          data-testid="button-filter"
        >
          Filtrar
        </button>

      </form>
    </>
  );
};

export default SearchBar;
