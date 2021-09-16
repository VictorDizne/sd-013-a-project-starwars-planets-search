import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const headers = ['climate', 'created', 'diameter', 'edited', 'films', 'gravity',
  'name', 'orbital_period', 'population', 'rotation_period', 'surface_water',
  'terrain', 'url'];

function Table() {
  const { data } = useContext(PlanetsContext);

  return (
    <div>
      <table>
        <tr>
          {headers.map((field, index) => <th key={ index }>{ field }</th>)}
        </tr>
        { data.map((planet) => (
          <tr key={ planet.name }>
            { headers.map((field, index) => <td key={ index }>{ planet[field] }</td>)}
          </tr>))}
      </table>
    </div>
  );
}

export default Table;
