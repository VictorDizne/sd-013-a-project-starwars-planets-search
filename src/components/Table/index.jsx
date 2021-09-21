import React, { useContext } from 'react';
import { PlanetsContext } from '../../context';
import Planet from '../Planet';

const Table = () => {
  const { planets,
    titles,
    filters: { filterByName: { name: query },
      filterByNumericValues },
  } = useContext(PlanetsContext);
  if (planets.length === 0) return <div>Carregando</div>;

  return (
    <table>
      <thead>
        <tr>
          {titles
            .map((title) => <th key={ title }>{title}</th>)}
        </tr>
      </thead>
      <tbody>
        {planets
          // filtro coluna
          .filter((planet) => {
            const validate = filterByNumericValues.every((
              { column, comparison, value },
            ) => {
              if (comparison === 'maior que') {
                return Number(planet[column]) > Number(value);
              }
              if (comparison === 'menor que') {
                return Number(planet[column]) < Number(value);
              }
              if (comparison === 'igual a') {
                return Number(planet[column]) === Number(value);
              }
              return false;
            });
            return validate ? planet : null;
          })
          // filtro nome
          .filter(({ name }) => name.toLowerCase().includes(query.toLowerCase()))
          .map((planet) => (
            <Planet key={ planet.name } planet={ planet } />
          ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {

};

export default Table;
