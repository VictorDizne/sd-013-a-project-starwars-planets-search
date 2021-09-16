import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppContext';

const AppProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main>
      <AppContext.Provider value={ { planets, setPlanets, isLoading, setIsLoading } }>
        {children}
      </AppContext.Provider>
    </main>
  );
};

AppProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default AppProvider;
