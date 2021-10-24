import React, { useState, useEffect } from 'react';
import getPlanets from '../service/index';
// ok, o vscode diz q getPlanets é uma promise...
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
  // const [stateA, SetStateA] = useState('Exemplo pegando o stateA');
  const [data, SetData] = useState([]);

  useEffect(() => {
    getPlanets()
      .then((planets) => {
        if (planets !== 'undefined') {
          SetData(planets);
        }
      });
  }, []);

  const contextValue = {
    data,
    SetData,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
