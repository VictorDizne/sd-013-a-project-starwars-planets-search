import React, { useState, useEffect, useReducer } from 'react';
import { Table, Filters, FilterList } from '../components';

// const FilterDispatch = React.createContext(null);

export default function Main() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const planets = await response.json();
      setData(planets);
    };
    fetchPlanets();
  }, []);

  const initialFilters = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'Name',
      sort: 'ASC',
    },
  };

  const filterReducer = (state, { type, payload }) => {
    const numericFilters = state.filterByNumericValues;
    const filtersAfterDelete = numericFilters.filter(
      (el) => el.column !== payload.column,
    );

    switch (type) {
    case 'name':
      return {
        ...state,
        filterByName: {
          name: payload,
        },
      };
    case 'numeric-value':
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          payload,
        ],
      };
    case 'remove-filter':
      return {
        ...state,
        filterByNumericValues: filtersAfterDelete,
      };

    default:
      return state;
    }
  };

  const [filters, dispatch] = useReducer(filterReducer, initialFilters);

  return (
    <main>
      <Filters dispatch={ dispatch } filters={ filters }>
        <FilterList dispatch={ dispatch } filters={ filters } />
      </Filters>
      <Table data={ data } filters={ filters } />
    </main>
  );
}
