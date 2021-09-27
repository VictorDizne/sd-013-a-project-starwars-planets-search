// @ts-check
import React, { useContext, useEffect } from 'react';
import MyContext from '../Context/MyContext';
import TableInfo from './TableInfo';

function Table() {
  const { planetsAtributes, setPlanetsAtributes, searchResult } = useContext(MyContext);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();

      setPlanetsAtributes(data.results || []);
    };
    loadData();
  }, [setPlanetsAtributes]);

  return (
    <table>
      <thead>
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
      </thead>
      <tbody>
        {searchResult.length > 0
          ? searchResult.map(TableInfo)
          : planetsAtributes.map(TableInfo)}
      </tbody>
    </table>
  );
}

export default Table;
