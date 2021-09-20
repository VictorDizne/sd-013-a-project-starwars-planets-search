// @ts-check
import React, { useContext, useEffect } from 'react';
import MyContext from '../Context/MyContext';
import TableInfo from './TableInfo';

function Table() {
  const { planetsAtributes, setPlanetsAtributes } = useContext(MyContext);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();
      console.log(data);

      setPlanetsAtributes(data.results || []);
    };
    loadData();
  }, [setPlanetsAtributes]);

  return (
    <table>
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
        <th>Created</th>
        <th>Edited</th>
        <th>URL</th>
      </tr>
      <tbody>
        {planetsAtributes.map(TableInfo)}
      </tbody>
    </table>
  );
}

export default Table;
