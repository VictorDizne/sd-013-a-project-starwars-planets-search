import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { PlanetsContext } from '../../context';
import Planet from '../Planet';

const Table = () => {
  const { planets, titles } = useContext(PlanetsContext);
  if (planets.length === 0) return <div>Carregando</div>;
  return (
    <table>
      <thead>
        <tr>
          {titles
            .filter((title) => title !== 'residents')
            .map((title) => <th key={ title }>{title}</th>)}
        </tr>
      </thead>
      <tbody>
        {planets.map((planet) => (
          <Planet key={ planet.name } planet={ planet } />
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {

};

export default Table;
