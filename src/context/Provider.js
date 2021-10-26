import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import planetsAPI from '../services/planetsAPI';

const Provider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [aux, setAux] = useState(false);
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      order: {
        column: 'name',
        sort: 'ASC',
      },
      filterByNumericValues: [],
    },
  });

  const getDataFromApi = async () => {
    const dataAPI = await planetsAPI();
    setPlanets(dataAPI);
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  const contextValue = {
    planets,
    filter,
    setFilter,
    aux,
    setAux,
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
