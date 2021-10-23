import React, { useContext, useState } from 'react';
import { DataContext, FilterContext } from '../context/MyContext';

export default function NumericSearch() {
  const [filterObject, setFilterObject] = useState({});
  const { isReady } = useContext(DataContext);
  const { filters, setFilters, columns, removeColumn } = useContext(FilterContext);

  function handleFilter() {
    setFilters(() => {
      removeColumn([
        ...filters.filterByNumericValues,
        filterObject,
      ]);
      return {
        ...filters,
        filterByNumericValues: [
          ...filters.filterByNumericValues,
          filterObject,
        ],
      };
    });
  }

  function handleChange({ target: { value, name } }) {
    setFilterObject({
      ...filterObject,
      [name]: value,
    });
  }

  return (
    <div>
      <label htmlFor="column">
        <select name="column" data-testid="column-filter" onChange={ handleChange }>
          {isReady && columns
            .map((column, index) => <option key={ index }>{column}</option>)}
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ handleChange }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="value">
        <input
          name="value"
          type="number"
          data-testid="value-filter"
          onChange={ handleChange }
        />
      </label>
      <button type="button" data-testid="button-filter" onClick={ handleFilter }>
        Filtrar
      </button>
    </div>
  );
}

//  Componente criado para resolução do requisito 3 junto com o component NamePlanet

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
