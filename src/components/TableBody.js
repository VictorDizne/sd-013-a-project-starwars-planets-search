import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

export default function TableBody() {
  const { data } = useContext(MyContext);
  return (
    <tbody>

      {data.map((item, index) => (

        <tr key={ index }>
          <td data-testid="planet-name">{ item.name }</td>
          <td>{ item.rotation_period }</td>
          <td>{ item.orbital_period }</td>
          <td>{ item.diameter }</td>
          <td>{ item.climate }</td>
          <td>{ item.gravity }</td>
          <td>{ item.terrain }</td>
          <td>{ item.surface_water }</td>
          <td>{ item.population}</td>
          <td>{ item.films }</td>
          <td>{ item.created }</td>
          <td>{ item.edited }</td>
          <td>{ item.url }</td>
        </tr>

      ))}
    </tbody>
  );
}
