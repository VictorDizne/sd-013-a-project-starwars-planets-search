import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

export const DataContext = React.createContext();
export const FilterContext = React.createContext();

function isNumeric(str) {
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
  });
  // https://swapi-trybe.herokuapp.com/api/planets/
  useEffect(() => {
    fetch('https://swapi.dev/api/planets/')
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

  function removeColumn(filterByNumericValues) {
    filterByNumericValues.forEach((filter) => {
      const { column } = filter;
      console.log(column);
      setColumns(() => columns.filter((key) => key !== column));
    });
  }

  useEffect(() => {
    if (!initialRender.current) {
      const { name } = filters.filterByName;
      const { filterByNumericValues } = filters;
      setData(() => {
        let newData = [...backup.current
          .filter((planet) => planet.name.includes(name))];
        filterByNumericValues.forEach((filter) => {
          const { comparison, value, column } = filter;
          console.log(column);
          // removeColumn(column);
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

  return (
    <FilterContext.Provider value={ { filters, setFilters, columns, removeColumn } }>
      <DataContext.Provider value={ { data, isReady, backup } }>
        {children}
      </DataContext.Provider>
    </FilterContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
