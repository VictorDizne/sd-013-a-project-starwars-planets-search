import React, { useState } from 'react';

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

export default AppProvider;
