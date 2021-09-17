import { createContext } from 'react';

export const INITIAL_CONTEXT = {
  data: [],
  filters: [],
};

const myContext = createContext(INITIAL_CONTEXT);

export default myContext;
