import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import planetAPI from '../service/planetAPI';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const handleAPIRequest = async () => {
      const APIreturn = await planetAPI();
      setData(APIreturn);
    };
    handleAPIRequest();
  }, []);

  const contextValue = {
    data,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
