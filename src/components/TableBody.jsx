import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../context/Context';

function TableBody() {
  const data = useContext(StarWarsContext);
  const { filters } = data;
  const [list, setlist] = useState([]);
  const [results] = useState(data.data);

  useEffect(() => {
    const { name } = filters.filterByName;
    const search = name.toLowerCase();
    if (name) {
      const lUp = results.filter((iten) => iten.name.toLowerCase().includes(search));
      setlist(lUp);
    } else { setlist(results); }
  }, [filters, results]);

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
