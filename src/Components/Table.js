import React, { useEffect, useContext, useState } from 'react';
import myContext from '../context/myContext';
import Planet from './Planet';

function Table() {
  const {
    planets,
    titles,
    stateFiltered,
    reset,
    setStateFiltered,
  } = useContext(myContext);

  const [planetsFiltered, setPlanetsFiltered] = useState(planets);

  const { filterByName: { name }, filterByNumericValues } = stateFiltered.filter;

  useEffect(() => setPlanetsFiltered(planets), [planets]);

  const filtrarPlanetas = () => {
    const comps = {
      'maior que': (coluna, valor) => Number(coluna) > Number(valor),
      'menor que': (coluna, valor) => Number(coluna) < Number(valor),
      'igual a': (coluna, valor) => Number(coluna) === Number(valor),
    };

    if (reset) {
      setPlanetsFiltered(planets);
    }

    if (!filterByNumericValues) {
      setPlanetsFiltered(planets);
    }

    if (!filterByNumericValues.length && !reset) {
      setPlanetsFiltered(planets);
    }
    if (filterByNumericValues.length === 1 && !reset) {
      filterByNumericValues
        .forEach(({ column, comparison, value }) => setPlanetsFiltered(planets
          .filter((planet) => comps[comparison](planet[column], value))));
    } else if (filterByNumericValues.length > 1 && !reset) {
      filterByNumericValues
        .forEach(
          ({ column, comparison, value }) => setPlanetsFiltered(
            planetsFiltered
              .filter((planet) => comps[comparison](planet[column], value)),
          ), /* .filter((item, i, arr) => arr.findIndex(
            (val) => (val.name === item.name),
          ) === i)), */
        );
    }

    /*  arr.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i) */

    if (name) {
      setPlanetsFiltered(planets.filter((planet) => (planet.name)
        .toLowerCase()
        .includes(name)));
    }
  };
  useEffect(filtrarPlanetas, [stateFiltered]);

  /*  useEffect(() => {
    if (wichColumn !== '') {
      const objColumn = filterByNumericValues.filter((ob) => ob.column === wichColumn);
      setObj(objColumn);
    }
  }, [wichColumn, filterByNumericValues]);

  useEffect(() => {
    const { column, comparison, value } = obj;
    const quantidade = (planet) => {
      switch (comparison) {
      case 'maior que':
        return Number(planet[column]) > Number(value);
      case 'menor que':
        return Number(value(planet[column])) < Number(value);
      case 'igual a':
        console.log(planet[column] === value);
        return planet[column] === value;
      default:
        console.log(obj);
        console.log(obj.comparison);
        return true;
      }
    };
    const filtrar = planets.filter((planet) => quantidade(planet));

    setPlanetsFiltered(filtrar);
  }, [filterByNumericValues, obj, planets, wichColumn]); */

  return (
    <div>
      <table border={ 1 }>
        <thead>
          <tr>
            {titles.map((title, id) => <th key={ id }>{title}</th>)}
          </tr>
        </thead>
        <tbody>
          {planetsFiltered
            .filter((planet) => planet.name.toLowerCase()
              .includes(name.toLowerCase()))
            .map((planet, i) => <Planet key={ i } planet={ planet } />)}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
