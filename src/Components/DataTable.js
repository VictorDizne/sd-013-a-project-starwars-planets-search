import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';
import PlanetBody from './PlanetBody';

function DataTable() {
  const { data, heads, filters } = useContext(MyContext);
  // console.log(data);

  return (
    <div>
      <table border={ 1 }>
        <thead>
          <tr>
            {heads.map((head, id) => (
              <th key={ id }>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.filter((plnt) => plnt.name.toLowerCase().includes(filters))
            .map((item, i) => (
              <PlanetBody key={ i } planet={ item } /> // esse map deu erro por um tempãp, depois funcionou do nanda. ainda dá erro na url
            ))}
        </tbody>
        {/* {data.map((item) => (
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
          ))} */}
      </table>
    </div>
  );
}

export default DataTable;
