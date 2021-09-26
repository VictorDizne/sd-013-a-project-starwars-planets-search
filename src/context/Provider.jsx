import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './Context';
import useFetchPlanet from '../Hooks/useFetchPlanets';

const SWProvider = ({ children }) => {
  const [data] = useFetchPlanet();
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  // const handleFilters = (newFilter) => {
  //   setFilters(filters.concat(newFilter));
  // };
  // console.log(data);
  return (
    <main>
      <StarWarsContext.Provider value={ { filters, setFilters, data } }>
        {children}
      </StarWarsContext.Provider>
    </main>
  );
};

SWProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SWProvider;
