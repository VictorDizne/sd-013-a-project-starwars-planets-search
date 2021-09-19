import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import planetAPI from '../service/planetAPI';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [dataFiltered, setDataFiltered] = useState([]);
  const [filter, setFilter] = useState(
    { filterByName: { name: '' } },
  );

  useEffect(() => {
    const handleAPIRequest = async () => {
      const APIreturn = await planetAPI();
      const dataAPI = APIreturn
        .filter((item) => delete item.residents);
      setData(dataAPI);
    };
    handleAPIRequest();
  }, []);

  const contextValue = {
    data,
    setData,
    filter,
    setFilter,
    dataFiltered,
    setDataFiltered,
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
