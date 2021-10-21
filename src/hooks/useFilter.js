import { useEffect, useContext, useState } from 'react';
import Context from '../context/AppContext';

function useFilter() {
  const [newFilter, setNewFilter] = useState('');
  const { setFilters } = useContext(Context);

  useEffect(() => {
    const INITIAL_STATE = {
      filters: {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [],
        order: {
          column: 'name',
          sort: 'ASC',
        },
      },
    };

    setFilters(newFilter === '' ? INITIAL_STATE : newFilter);
  }, [newFilter, setFilters]);

  return [setNewFilter];
}

export default useFilter;
