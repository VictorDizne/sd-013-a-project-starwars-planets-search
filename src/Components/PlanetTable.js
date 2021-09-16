import React from 'react';
import FetchWars from '../hooks/FetchWars';

function PlanetTable() {
  const [statewars] = FetchWars();

  const THead = () => {
    if (statewars.length !== 0) {
      const keys = Object.keys(statewars[0]);
      return (
        <thead>
          <tr>
            { keys.map((i) => <th key={ i }>{ i }</th>) }
          </tr>
        </thead>
      );
    }
  };

  const TBody = () => {
    if (statewars.length !== 0) {
      return (
        <tbody>

          { statewars.map((i) => {
            const classplanet = `${i.name}`.replace(/\s/g, '');
            return (
              <tr key={ i.name }>
                <td className={ classplanet }>{i.name}</td>
                <td className={ classplanet }>{i.rotation_period}</td>
                <td className={ classplanet }>{i.orbital_period}</td>
                <td className={ classplanet }>{i.diameter}</td>
                <td className={ classplanet }>{i.climate}</td>
                <td className={ classplanet }>{i.gravity}</td>
                <td className={ classplanet }>{i.terrain}</td>
                <td className={ classplanet }>{i.surface_water}</td>
                <td className={ classplanet }>{i.population}</td>
                <td className={ classplanet }>{i.films}</td>
                <td className={ classplanet }>{i.created}</td>
                <td className={ classplanet }>{i.edited}</td>
                <td className={ classplanet }>{i.url}</td>
              </tr>
            );
          }) }

        </tbody>
      );
    }
  };

  return (
    <table>
      { THead()}
      { TBody() }
    </table>
  );
}

export default PlanetTable;
