import React, { useState } from 'react';
import MyContext from '../Context';
import './table.css';

function Table() {
  const [data, setData] = useState([]);
  const [firstObj, setFirstObj] = useState([]);

  return (
    <div>
      <MyContext.Consumer>
        {(value) => {
          setFirstObj(value[0]);
          setData(value);
        }}
      </MyContext.Consumer>
      <table>
        <tr className="tr-header">
          {!firstObj ? <p>Loading...</p> : Object.keys(firstObj)
            .filter((filteredKey) => filteredKey !== 'residents')
            .map((key) => (
              <th className="th" key={ key }>{ key }</th>
            )) }
        </tr>
        {data.map((info, idx) => (
          <tr key={ idx } className="tr-header">
            <td className="td">{ info.name }</td>
            <td className="td">{ info.rotation_period }</td>
            <td className="td">{ info.orbital_period }</td>
            <td className="td">{ info.diameter }</td>
            <td className="td">{ info.climate }</td>
            <td className="td">{ info.gravity }</td>
            <td className="td">{ info.terrain }</td>
            <td className="td">{ info.surface_water }</td>
            <td className="td">{ info.population }</td>
            <td className="td">{ info.films }</td>
            <td className="td">{ info.created }</td>
            <td className="td">{ info.edited }</td>
            <td className="td"><a href={ info.url }>{ info.url }</a></td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;
