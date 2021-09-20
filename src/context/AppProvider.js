import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppContext';
import getPlanets from '../services/getPlanets';

const AppProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('');
  const [arrayNumericValues, setArrayNumericValues] = useState([{
    comparison: 'primeira',
  }]);

  useEffect(() => {
    const fetchData = async () => {
      const planetsApi = await getPlanets();
      const filteredPlanets = planetsApi.map((planet) => {
        delete planet.residents;
        return planet;
      });
      setPlanets(filteredPlanets);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const filters = {
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues: arrayNumericValues,
    },
  };

  const contextValue = {
    planets,
    setPlanets,
    isLoading,
    filters,
    setName,
    arrayNumericValues,
    setArrayNumericValues,
  };

  return (
    <main>
      <AppContext.Provider value={ { contextValue } }>
        {children}
      </AppContext.Provider>
    </main>
  );
};

AppProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default AppProvider;
