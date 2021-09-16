import React, { useContext } from 'react';
import starWarsContext from '../Context';
import DisplayPlanetinfo from './DisplayPlanetInfo';

function TableBody() {
  const { data } = useContext(starWarsContext);
  return (
    <tbody>
      { data.map((planet, index) => (
        <tr key={ index }>
          <DisplayPlanetinfo planet={ planet } />
        </tr>)) }
    </tbody>
  );
}

export default TableBody;
