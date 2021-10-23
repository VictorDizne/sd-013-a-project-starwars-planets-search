import React, { useContext } from 'react';
import { FilterContext } from '../context/MyContext';

export default function Filter() {
  const { filters, removeFilter } = useContext(FilterContext);
  const { filterByNumericValues } = filters;

  return (
    <div>
      {filterByNumericValues.map(({ comparison, column, value }, index) => (
        <div data-testid="filter" key={ index }>
          <p>{`${column} ${comparison} ${value}`}</p>
          <button onClick={ () => removeFilter(column) } type="button">X</button>
        </div>
      ))}
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
