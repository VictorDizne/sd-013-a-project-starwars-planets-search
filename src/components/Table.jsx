import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

// passa por cada um dos items necessarios de cada planeta atraves do map()

function Table() {

    const { data } = useContext(PlanetsContext);

    const planetsData = (data) => {
        /* if(data.length !== 0) {
            console.log(data);
        } */
 
        return data.map((planet) => (
          <tr key={ planet.name }>
          <td>{planet.name}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.diameter}</td>
          <td>{planet.climate}</td>
          <td>{planet.gravity}</td>
          <td>{planet.terrain}</td>
          <td>{planet.surface_water}</td>
          <td>{planet.population}</td>
          <td>{planet.films}</td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
          <td>{planet.url}</td>
        </tr>
        ))
    }

    return (
        <div>
            <table>
                <thead>
                {/* header da tabela */}
                <tr>
                  <th>Name</th>
                  <th>Rotation Period</th>
                  <th>Orbital Period</th>
                  <th>Diameter</th>
                  <th>Climate</th>
                  <th>Gravity</th>
                  <th>Terrain</th>
                  <th>Surface Water</th>
                  <th>Population</th>
                  <th>Films</th>
                  <th>Create</th>
                  <th>Edited</th>
                  <th>URL</th>
                </tr>
                </thead>
                <tbody>
                {/* {console.log(data)} */}
                {/* infos de tabela em => https://www.w3schools.com/tags/tag_th.asp */}
                {planetsData(data)}
                </tbody>
            </table>
        </div>
    )
}

export default Table;
