import React from 'react';

function NameFilter({ value: { name, data } }) {
  return (
    data.filter((test) => test.name.toLowerCase().includes(name.toLowerCase()))
      .map((info, idx) => (
        <tr className="tr" key={ idx }>
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
      ))
  );
}

export default NameFilter;
