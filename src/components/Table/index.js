import React from 'react';
import usePlanetsContext from '../../hooks/usePlanetsContext';
import TableBody from '../TableBody';
import TableHeader from '../TableHeader';

function Table() {
  const { data, isPlanetsFilled } = usePlanetsContext();

  // const columns = getColumns(planets);

  // useEffect(() => {
  //   if (isPlanetsFilled) setColumns(getColumns(data.results));
  // }, [isPlanetsFilled, data]);

  return (
    <table>
      <TableHeader />
      <tbody>
        {
          !isPlanetsFilled
            ? <TableBody />
            : (
              data.results.map((planet) => (
                <tr key={ planet.name }>
                  <td>{ planet.name }</td>
                  <td>{ planet.rotation_period }</td>
                  <td>{ planet.orbital_period }</td>
                  <td>{ planet.diameter }</td>
                  <td>{ planet.climate }</td>
                  <td>{ planet.gravity }</td>
                  <td>{ planet.terrain }</td>
                  <td>{ planet.surface_water }</td>
                  <td>{ planet.population }</td>
                  <td>{ planet.films }</td>
                  <td>{ planet.created }</td>
                  <td>{ planet.edited }</td>
                  <td>{ planet.url }</td>
                </tr>
              ))
            )
        }
      </tbody>
    </table>
  );

  // return <div>teste</div>;
}

export default Table;
