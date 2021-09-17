import React, { useContext, useEffect } from 'react';
import dataContext from '../context/createContext';

import fetchApi from '../fetch/fetch';
import Table from './Table';

function Main() {
  const { setData, setIsLoading, isLoading } = useContext(dataContext);

  useEffect(() => {
    const Fetch = async () => {
      const response = await fetchApi();
      setData({ data: response });
      setIsLoading({ loading: false });
    };
    Fetch();
  }, [setData, setIsLoading]);

  if (!isLoading.loading) {
    return (
      <Table />
    );
  }

  if (isLoading) {
    return <table />;
  }
}

export default Main;
