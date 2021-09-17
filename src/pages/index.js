import React, { useState, useEffect, useReducer } from 'react';
import { Table, Filters } from '../components';

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
      name: 'Cleber',
    },
    filterByNumericValues: [],
    order: {
      column: 'Name',
      sort: 'ASC',
    },
  };

  const filterReducer = (state, { type, payload }) => {
    const filters = state.filterByNumericValues;
    const filtersAfterDelete = filters.filter((el) => el.column !== payload.column);

    switch (type) {
    case 'name':
      return {
        ...state,
        filterByName: {
          name: payload,
        },
      };
    case 'numeric_value':
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          {
            column: payload.column,
            comparison: payload.comparison,
            value: payload.value,
          },
        ],
      };
    case 'remove-filter':
      return {
        ...state,
        filterByNumericValues: [
          filtersAfterDelete,
        ],
      };

    default:
      return state;
    }
  };

  const [filters, dispatch] = useReducer(filterReducer, initialFilters);

  return (
    <main>
      <Filters dispatch={ dispatch } />
      <Table data={ data } filters={ filters } />
    </main>
  );
}
