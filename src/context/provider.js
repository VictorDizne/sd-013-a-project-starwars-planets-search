import React, { useEffect, useState } from 'react';
import StarsContext from './StarContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const StarsApi = async () => {
    const api = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const Obj = await api.json();
    const arrayResult = Obj.results;
    setData(arrayResult);
  };
  useEffect(() => {
    StarsApi();
  }, []);
  const contextValue = {
    data,
  };
  return (
    <StarsContext.Provider value={ contextValue }>
      { children }
    </StarsContext.Provider>
  );
}

export default Provider;
