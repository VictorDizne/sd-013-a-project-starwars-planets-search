import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PlanetsContext from './PlanetsContext';

const INITIAL_FILTER = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

const INITIAL_OPTIONS = ['population',
  'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

const PlanetsContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [filter, setFilter] = useState(INITIAL_FILTER);
  const [options, setOptions] = useState(INITIAL_OPTIONS);

  const context = {
    data, setData, isFetching, setIsFetching, filter, setFilter, options, setOptions,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
};

PlanetsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsContextProvider;
