import { createContext } from 'react';
import testData from '../testData';

const initialValue = {
  data: testData,
  setData: () => {},
  isPlanetsFilled: false,
  setIsPlanetsFilled: () => {},
  columns: [],
  setColumns: () => {},
  filters: {},
  setFilters: () => {},
  planets: testData.results,
  setPlanets: () => {},
  filterPlanets: () => {},
};

const PlanetsContext = createContext(initialValue);

export default PlanetsContext;
