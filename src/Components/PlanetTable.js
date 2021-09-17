import React, { useContext } from 'react';
// import FetchWars from '../hooks/FetchWars';
import MyContext from '../context/MyContext';

function PlanetTable() {
  const { statewars, filterwars } = useContext(MyContext);

  const THead = () => {
    if (statewars.length) {
      const keys = Object.keys(statewars[0]);
      return (
        <thead>
          <tr>
            { keys.map((i) => {
              const classheaderID = `${i}`;
              return (
                <th className={ classheaderID } key={ i }>{ i }</th>
              );
            }) }
          </tr>
        </thead>
      );
    }
  };

  const TBody = (mapfilterresult) => {
    if (mapfilterresult.length) {
      return (
        <tbody>

          { mapfilterresult.map((i) => {
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

  const mapFilter = () => {
    const { filters: { filterByName: { name } } } = filterwars;
    if (name) {
      const statewarsfilter = statewars.filter((i) => i.name.includes(name));
      return TBody(statewarsfilter);
    }
    return TBody(statewars);
  };

  return (
    <table>
      { THead()}
      { mapFilter() }
    </table>
  );
}

export default PlanetTable;
