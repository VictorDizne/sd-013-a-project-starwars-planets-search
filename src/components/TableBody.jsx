import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/Context';

function TableBody() {
  const data = useContext(StarWarsContext);
  const [list] = useState(data.data);
  return (
    <tbody>
      {list.map((item) => (
        <tr key={ item.name }>
          <td>{item.name}</td>
          <td>{item.rotation_period}</td>
          <td>{item.orbital_period}</td>
          <td>{item.diameter}</td>
          <td>{item.climate}</td>
          <td>{item.gravity}</td>
          <td>{item.terrain}</td>
          <td>{item.surface_water}</td>
          <td>{item.population}</td>
          <td>{item.films}</td>
          <td>{item.created}</td>
          <td>{item.edited}</td>
          <td>{item.url}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
