import React from 'react';
import PropTypes from 'prop-types';

export default function TableRow({ planet }) {
  return (
    <tr>
      { Object.entries(planet).map((info, index) => {
        if (info[0] !== 'residents') {
          return (<td data-testid={ `planet-${info[0]}` } key={ index }>{info[1]}</td>);
        }
        return null;
      })}
    </tr>
  );
}

TableRow.propTypes = {
  planet: PropTypes.shape({}).isRequired,
};

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
