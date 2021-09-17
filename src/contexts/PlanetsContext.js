import { createContext } from 'react';
import testData from '../testData';

const initialValue = {
  data: testData,
  setData: () => {},
  isPlanetsFilled: false,
  setIsPlanetsFilled: () => {},
  setColumns: () => {},
  filters: {},
  setFilters: () => {},
  planets: testData.results,
  setPlanets: () => {},
};

const PlanetsContext = createContext(initialValue);

export default PlanetsContext;
