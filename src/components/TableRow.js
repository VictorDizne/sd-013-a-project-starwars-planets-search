import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { DataContext } from '../context/MainContext';

export default function TableRow({ planet }) {
  const { films } = useContext(DataContext);

  return (
    <tr>
      { Object.entries(planet).map((info, index) => {
        if (info[0] !== 'residents') {
          if (info[0] === 'films') { // condicional para renderizar filmes com base no dicionário criado no context
            return (
              <td data-testid={ `planet-${info[0]}` } key={ index }>
                {info[1].map((urlFilm) => films[urlFilm]).toString()}
              </td>
            );
          }
          return (
            <td data-testid={ `planet-${info[0]}` } key={ index }>{info[1]}</td>
          );
        }
        return null;
      })}
    </tr>
  );
}

TableRow.propTypes = {
  planet: PropTypes.shape({}).isRequired,
};
