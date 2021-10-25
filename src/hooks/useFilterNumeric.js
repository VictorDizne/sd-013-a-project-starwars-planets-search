import { useContext } from 'react';
import MyContext from '../context/Context';

export default function useFilterNumeric() {
  const { data, filterNumeric, setListPlanets } = useContext(MyContext);

  const { comparison, value, column } = filterNumeric;

  const handleFilter = () => {
    let filterPlanet = data;
    switch (comparison) {
    case 'maior que':
      filterPlanet = (data.filter((planet) => Number(planet[column]) > Number(value)));
      return setListPlanets(filterPlanet);

    case 'menor que':
      filterPlanet = (data.filter((planet) => Number(planet[column]) < Number(value)));
      return setListPlanets(filterPlanet);

    case 'igual a':
      filterPlanet = (data.filter((planet) => Number(planet[column]) === Number(value)));
      return setListPlanets(filterPlanet);

    default:
      return filterPlanet;
    }
  };
  return [handleFilter];
}
