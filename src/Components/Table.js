import React from 'react';
import MyContext from '../Context';

class Table extends React.Component {
  render() {
    return (
      <tbody>
        <MyContext.Consumer>
          {
            ({ filterContainer }) => filterContainer.map(({
              name,
              rotation_period: rotation,
              orbital_period: orbital,
              diameter,
              climate,
              gravity,
              terrain,
              surface_water: surface,
              population,
              films,
              created,
              edited,
              url,
            }) => (
              <tr key={ name }>
                <td data-testid="planet-name">{ name }</td>
                <td>{ rotation }</td>
                <td>{ orbital }</td>
                <td>{ diameter }</td>
                <td>{ climate }</td>
                <td>{ gravity }</td>
                <td>{ terrain }</td>
                <td>{ surface }</td>
                <td>{ population }</td>
                <td>{ films }</td>
                <td>{ created }</td>
                <td>{ edited }</td>
                <td>{ url }</td>
              </tr>
            ))
          }
        </MyContext.Consumer>
      </tbody>
    );
  }
}

export default Table;
