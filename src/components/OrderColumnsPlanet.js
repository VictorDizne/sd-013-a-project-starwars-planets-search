import React, { useContext, useState } from 'react';
import { FilterContext } from '../context/MyContext';

const orderBy = [
  'name', 'rotation_period', 'orbital_period', 'diameter', 'surface_water', 'population',
];

export default function Order() {
  const { filters, setFilters } = useContext(FilterContext);
  const [order, setOrder] = useState({
    column: '',
    sort: '',
  });

  function handleChange({ target }) {
    setOrder({
      ...order,
      [target.name]: target.value,
    });
  }

  function handleClick() {
    setFilters({
      ...filters,
      order,
    });
  }

  return (
    <div>
      <label htmlFor="column">
        <select name="column" data-testid="column-sort" onChange={ handleChange }>
          {orderBy.map((column) => <option key={ column }>{column}</option>)}
        </select>
      </label>
      <div>
        <label htmlFor="ASC">
          ASC
          <input
            type="radio"
            value="ASC"
            name="sort"
            data-testid="column-sort-input-asc"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="DESC">
          DESC
          <input
            type="radio"
            value="DESC"
            name="sort"
            data-testid="column-sort-input-desc"
            onChange={ handleChange }
          />
        </label>
      </div>
      <button type="button" data-testid="column-sort-button" onClick={ handleClick }>
        sort
      </button>
    </div>
  );
}

// Referências:

// React, Documentação:
// https://pt-br.reactjs.org/docs/getting-started.html

// YouTube:
// Filipe Deschamps
// https://www.youtube.com/watch?v=aJR7f45dBNs

// Guilherme Rodz
// https://www.youtube.com/watch?v=FsCBw9X9U84&t=311s

// Kuze
// https://www.youtube.com/watch?v=V889MSVKk5Y

// stackoverflow:
// 'Quero verificar se a stringcontém apenas dígitos. Eu usei este:'
// https://stackoverflow.com/questions/1779013/check-if-string-contains-only-digits/1779019#1779019

// Trybe:
// https://app.betrybe.com/course/calendar/front-end

// github.com
// Consulta a repositorio de colegas:
// Bruno Pinho
// https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/70

// Vinicius Dionísio
// https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/11

// Caroline Boaventura
// https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/27

// Jaqueline Silva
// https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/73
