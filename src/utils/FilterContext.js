import { createContext } from 'react';

const FilterContext = createContext({
  data: {
    filters: {
      filterByName: {
        name: '',
      },
    },
  },
});

export default FilterContext;
