import { useState } from 'react';

const useInputName = () => {
  const [filters, setFilters] = useState({
    filters: {
      filterByName: {
        name: '',
      },
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
