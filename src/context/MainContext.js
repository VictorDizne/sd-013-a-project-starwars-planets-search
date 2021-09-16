import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

export const DataContext = React.createContext();
export const FilterContext = React.createContext();

export default function DataProvider({ children }) {
  const initialRender = useRef(true);
  const [data, setData] = useState();
  const backup = useRef([]);
  const [isReady, setIsReady] = useState(false);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });
  // https://swapi.dev/api/planets/
  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
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
      setData(() => [
        ...backup.current.filter((planet) => planet.name.includes(name)),
      ]);
    } else {
      initialRender.current = false;
    }
  }, [filters]);
  return (
    <FilterContext.Provider value={ { filters, setFilters } }>
      <DataContext.Provider value={ { data, isReady } }>
        {children}
      </DataContext.Provider>
    </FilterContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
