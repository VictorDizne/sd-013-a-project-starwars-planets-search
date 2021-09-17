import React from 'react';

const TableRow = (info) => {
  const { name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population, films, created, edited, url } = info.info;
  // console.log(info);
  // console.log(info.info);
  return (
    <tr>
      <td>{name}</td>
      <td>{rotation_period}</td>
      <td>{orbital_period}</td>
      <td>{diameter}</td>
      <td>{climate}</td>
      <td>{gravity}</td>
      <td>{terrain}</td>
      <td>{surface_water}</td>
      <td>{population}</td>
      <td>{films}</td>
      <td>{created}</td>
      <td>{edited}</td>
      <td>{url}</td>
    </tr>
  );
};

export default TableRow;
