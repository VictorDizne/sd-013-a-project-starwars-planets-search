import React, { useContext, useEffect } from 'react';
import dataContext from '../context/createContext';

import fetchApi from '../fetch/fetch';
import Table from './Table';

function Main() {
  const { setData, setIsLoading, isLoading } = useContext(dataContext);

  useEffect(() => {
    const Fetch = async () => {
      const { results } = await fetchApi();
      setData(results);
      setIsLoading(false);
    };

    Fetch();
  }, [setData, setIsLoading]);

  if (isLoading) return <table />;
  if (!isLoading) return <Table />;
}

export default Main;
