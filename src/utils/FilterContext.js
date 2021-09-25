import { createContext } from 'react';

const FilterContext = createContext({
  data: {
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column: '',
          comparison: '',
          value: '',
        },
      ],
    },
  },
});

export default FilterContext;
