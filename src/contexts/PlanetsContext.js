import { createContext } from 'react';

const initialValue = {
  data: {},
  setData: () => {},
  isPlanetsFilled: false,
  setIsPlanetsFilled: () => {},
  columns: [],
  setColumns: () => {},
  filters: {},
  setFilters: () => {},
  planets: [],
  setPlanets: () => {},
};

const PlanetsContext = createContext(initialValue);

export default PlanetsContext;
