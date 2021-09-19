import { useEffect, useContext, useState } from 'react';
import Context from '../context/Context';

function useFilters() {
  const [newFilter, setNewFilter] = useState('');
  const { setFilters } = useContext(Context);

  useEffect(() => {
    const INITIAL_STATE = {
      filters: {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [],
      },
    };

    setFilters(newFilter === '' ? INITIAL_STATE : newFilter);
  }, [newFilter, setFilters]);

  return [setNewFilter];
}

export default useFilters;
