import { createContext } from 'react';

const INITIAL_STATE = {
  filters: {
    filterByName: { name: '' },
    filterByNumericValues: ['nao iniciado'],
  },
  planets: ['nao iniciado'],
};

const PlanetContext = createContext(INITIAL_STATE);

export default PlanetContext;
