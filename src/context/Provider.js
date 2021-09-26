import React, { useEffect, useState } from 'react';
import Proptypes from 'prop-types';
import fetchApi from '../services/Api';
import MyContext from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);

  const apiRequest = async () => {
    const req = await fetchApi();
    setData(...req);
    setInfo(req);
  };

  useEffect(() => {
    apiRequest();
  }, []);

  const context = { data, info, setInfo };

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
