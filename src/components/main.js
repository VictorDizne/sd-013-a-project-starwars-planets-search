import React, { useContext, useEffect } from 'react';
import dataContext from '../context/createContext';
import ContextProvider from '../context/context';

import fetchApi from '../fetch/fetch'
import Table from './Table'

function Main() {
  const { setData, setIsLoading, isLoading } = useContext(dataContext);

  const Fetch = async () => {
    const response = await fetchApi();
    setData({ data: response})
    setIsLoading({ loading:false })
  }

  useEffect(() => {
    Fetch();
  }, [])


    if(!isLoading.loading) {
      return (
        <Table />
      )
    }

  if (isLoading) {
    return <table></table>
  }
}

export default Main;
