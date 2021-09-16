import React, { useEffect, useContext } from 'react';

import filters from '../helpers/functions/filters';

import loadingGif from '../imgs/loading.gif';
import '../styles/table.css';

import TableLegend from './TableLegend';
import AppContext from '../helpers/AppContext';

export default function Table() {
  const { data,
    filters: { filterByName: { name }, filterByNumericValues },
    order,
    sets: { setPlanets } } = useContext(AppContext);

  useEffect(() => {
    setPlanets('https://swapi-trybe.herokuapp.com/api/planets/');
  }, [setPlanets]);

  const loading = (<tr><td><img src={ loadingGif } alt="loading" /></td></tr>);
  return (
    <div className="container_table-Ta">
      <table>
        <TableLegend />
        <tbody>
          { (!data.length) ? loading : filters(data, name, filterByNumericValues, order)
            .map(({
              name: planetName, rotation_period: rotationPeriod,
              orbital_period: orbitalPeriod, diameter, climate, gravity, terrain,
              population, surface_water: surfaceWater, films,
            }, index) => (
              <tr key={ index }>
                <td data-testid="planet-name">{planetName}</td>
                <td>{rotationPeriod}</td>
                <td>{orbitalPeriod}</td>
                <td>{diameter}</td>
                <td>{climate}</td>
                <td>{gravity}</td>
                <td>{surfaceWater}</td>
                <td>{terrain}</td>
                <td>{population}</td>
                <td>{(films.length > Number('0')) ? films[0] : 'no Movie'}</td>
                <td>{(films.length > Number('1')) ? films[1] : 'no Movie'}</td>
                <td>{(films.length > Number('2')) ? films[2] : 'no Movie'}</td>
                <td>{(films.length > Number('3')) ? films[3] : 'no Movie'}</td>
              </tr>
            )) }
        </tbody>
      </table>
    </div>
  );
}
