import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import useMountEffect from '../hooks/useMountEffect';
import FilterBtn from './FilterBtn';

const Table = () => {
  const [filtered, setFiltered] = useState([]);
  const { data, setData, isFetching, setIsFetching, filter } = useContext(PlanetsContext);

  const fetchPlanets = () => {
    const fetching = async () => {
      if (!data || isFetching) return false;
      setIsFetching(true);

      const res = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const json = await res.json();
      const dataResults = json.results;

      dataResults.forEach((result) => {
        delete result.residents;
      });

      setData([...json.results]);
      setIsFetching(false);
      setFiltered([...json.results]);
    };

    fetching();
  };

  useMountEffect(fetchPlanets);

  const setFilteredPlanets = () => {
    if (filter.filterByNumericValues.length > 0) {
      filter.filterByNumericValues.forEach((f) => {
        const filteredPlanets = data.filter((p) => {
          if (f.comparison === 'maior que') {
            return Number(p[f.column]) > Number(f.value);
          } if (f.comparison === 'menor que') {
            return Number(p[f.column]) < Number(f.value);
          }
          return p[f.column] === f.value;
        });
        const lastFilter = filteredPlanets.filter(
          (p) => p.name.includes(filter.filterByName.name),
        );
        setFiltered([...lastFilter]);
      });
    } else {
      const lastFilter = data.filter(
        (p) => p.name.includes(filter.filterByName.name),
      );
      setFiltered([...lastFilter]);
    }
  };

  useEffect(setFilteredPlanets, [filter]);

  return (
    <>
      <FilterBtn />
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {filtered && filtered.map((p, i) => (
            <tr key={ `${p.name} ${i}` }>
              <td key={ p.name }>{p.name}</td>
              <td key={ p.rotation_period }>{p.rotation_period}</td>
              <td key={ p.orbital_period }>{p.orbital_period}</td>
              <td key={ p.diameter }>{p.diameter}</td>
              <td key={ p.climate }>{p.climate}</td>
              <td key={ p.gravity }>{p.gravity}</td>
              <td key={ p.terrain }>{p.terrain}</td>
              <td key={ p.surface_water }>{p.surface_water}</td>
              <td key={ p.population }>{p.population}</td>
              <td key={ p.films }>{p.films}</td>
              <td key={ p.created }>{p.created}</td>
              <td key={ p.edited }>{p.edited}</td>
              <td key={ p.url }>{p.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
