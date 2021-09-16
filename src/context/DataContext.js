import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const DataContext = React.createContext();

export default function DataProvider({ children }) {
  const [data, setData] = useState();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((json) => {
        setData(json.results);
        setIsReady(true);
      });
  }, [data]);

  return (
    <DataContext.Provider value={ { data, isReady } }>
      {children}
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
