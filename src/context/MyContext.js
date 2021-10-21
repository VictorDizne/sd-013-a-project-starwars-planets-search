import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

export const DataContext = React.createContext();
export const FilterContext = React.createContext();

export default function DataProvider({ children }) {
  const initialRender = useRef(true);
  // const [data, setData] = useState();
  const backup = useRef([]);

  const [data, setData] = useState();
  const [isReady, setIsReady] = useState(false);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  useEffect(() => {
    // fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    fetch('https://swapi.dev/api/planets/')
      .then((response) => response.json())
      .then((json) => {
        setData(json.results);
        backup.current = json.results;
        setIsReady(true);
      });
  }, []);

  useEffect(() => {
    if (!initialRender.current) {
      const { name } = filters.filterByName;
      // setData(() => [
      //   ...backup.current.filter((planet) => planet.name.includes(name)),
      // ]);
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
  return (
    <FilterContext.Provider value={ { filters, setFilters } }>
      <DataContext.Provider value={ { data, isReady, backup } }>
        {children}
      </DataContext.Provider>
    </FilterContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
