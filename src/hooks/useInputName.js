import { useState } from 'react';

const useInputName = () => {
  const [filters, setFilters] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column: '',
          comparision: '',
          value: '',
        },
      ],
    },
  });

  const handleInput = (value) => {
    setFilters(
      { ...filters,
        filters: {
          filterByName: {
            name: value,
          },
        },
      },
    );
  };

  const contextInput = {
    ...filters,
    handleInput,
  };

  return contextInput;
};

export default useInputName;
