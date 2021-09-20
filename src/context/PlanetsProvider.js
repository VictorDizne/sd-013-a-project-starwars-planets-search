import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchApi from '../SWPlanetsApi';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchApiData = async () => {
    const newData = await fetchApi();
    setIsFetching(true);
    setData(newData);
  };

  return (
    <PlanetsContext.Provider value={ { data, isFetching, fetchApiData } }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
