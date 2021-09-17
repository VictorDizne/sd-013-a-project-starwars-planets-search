import React from 'react';

const initialContext = {
  filters:
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column: 'population',
          comparison: 'maior que',
          value: '100000',
        },
      ],
    },
};

const contextSwapi = React.createContext(initialContext);

export default contextSwapi;
