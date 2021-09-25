import React, { useEffect, useState } from 'react';
import Proptypes from 'prop-types';
import fetchApi from '../services/Api';
import MyContext from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);

  const apiRequest = async () => {
    const req = await fetchApi();
    setData(...req);
  };

  useEffect(() => {
    apiRequest();
  }, []);

  const context = { data };

  return (
    <MyContext.Provider value={ context }>
      { children }
    </MyContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: Proptypes.object,
}.isRequired;
