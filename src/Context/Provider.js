import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function AppProvider({ children }) {
  const [planets, setPlanets] = useState();
  const [data, setPlanetData] = useState([]);
  const [filters, setFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  return (
    <Context.Provider
      value={ {
        data,
        setPlanetData,
        filters,
        setFilter,
        planets,
        setPlanets } }
    >
      {children}
    </Context.Provider>
  );
}
AppProvider.propTypes = {
  children: PropTypes.objectOf(Object).isRequired,
};

export default AppProvider;
