import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

export const DataContext = React.createContext();
export const FilterContext = React.createContext();

export function isNumeric(str) {
  return /^\d+$/.test(str);
}

export default function DataProvider({ children }) {
  const initialRender = useRef(true);
  const backup = useRef([]);

  const [data, setData] = useState();
  const [isReady, setIsReady] = useState(false);
  const [columns, setColumns] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  useEffect(() => {
    // fetch('https://swapi.dev/api/planets/')
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((json) => {
        setData(json.results);
        backup.current = json.results;
        setColumns(
          Object.entries(backup.current[0])
            .map(([key, value]) => {
              if (isNumeric(value)) {
                return key;
              }
              return '';
            })
            .filter((column) => column !== ''),
        );
        setIsReady(true);
      });
  }, []);

  useEffect(() => {
    if (!initialRender.current) {
      const { name } = filters.filterByName;
      const { filterByNumericValues } = filters;
      setData(() => {
        let newData = [...backup.current
          .filter((planet) => planet.name.includes(name))];
        filterByNumericValues.forEach((filter) => {
          const { comparison, value, column } = filter;
          newData = newData.filter((planet) => {
            switch (comparison) {
            case 'maior que':
              return Number(planet[column]) > Number(value);
            case 'menor que':
              return Number(planet[column]) < Number(value);
            case 'igual a':
              return planet[column] === value;
            default:
              return null;
            }
          });
        });
        return newData;
      });
    } else {
      initialRender.current = false;
    }
  }, [filters]);

  function removeColumn(filterByNumericValues) {
    filterByNumericValues.forEach((filter) => {
      const { column } = filter;
      setColumns(() => columns.filter((key) => key !== column));
    });
  }

  function removeFilter(column) {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues.filter((filter) => filter.column !== column),
      ],
    });
  }

  return (
    <FilterContext.Provider
      value={ { filters, setFilters, columns, removeColumn, removeFilter } }
    >
      <DataContext.Provider value={ { data, isReady, backup } }>
        {children}
      </DataContext.Provider>
    </FilterContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
