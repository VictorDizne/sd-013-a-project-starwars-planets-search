import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../context/Context';

function TableBody() {
  const data = useContext(StarWarsContext);
  const { filters: { filterByName, filterByNumericValues } } = data;
  const [list, setlist] = useState([]);
  const [results] = useState(data.data);

  useEffect(() => {
    const { name } = filterByName;
    const search = name.toLowerCase();
    if (name) {
      const lUp = results.filter((iten) => iten.name.toLowerCase().includes(search));
      setlist(lUp);
    } else { setlist(results); }
  }, [filterByName, results]);

  useEffect(() => {
    const { number, operator, type } = filterByNumericValues;
    if (number) {
      const lUp = results.filter((iten) => {
        switch (operator) {
        case 'maior que':
          return (Number(iten[type]) > Number(number));
        case 'menor que':
          return (Number(iten[type]) < Number(number));
        case 'igual a':
          return (Number(iten[type]) === Number(number));
        default:
          return null;
        }
      });
      setlist(lUp);
    } else { setlist(results); }
  }, [filterByNumericValues, results]);

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
