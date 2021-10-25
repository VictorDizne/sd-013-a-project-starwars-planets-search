import React, { useEffect, useState } from 'react';
import Proptypes from 'prop-types';
import fetchApi from '../services/Api';
import MyContext from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState({
    filters:
    {
      filterByName: {
        name: '',
      },
    },
  });

  const apiRequest = async () => {
    const req = await fetchApi();
    setData(req);
  };

  useEffect(() => {
    apiRequest();
  }, []);

  const context = { data, ...name, setName, setData };

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
