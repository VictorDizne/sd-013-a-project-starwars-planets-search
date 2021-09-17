import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import planetsAPI from '../services/planetsAPI';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);

  const getDataFromApi = async () => {
    const dataAPI = await planetsAPI();
    setData(dataAPI);
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  const contextValue = {
    data,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
