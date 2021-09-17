import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import './App.css';
import myContext from './context';
import fetchApi from './services/requestAPI';

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const contextValue = { data, loading };

  useEffect(() => {
    fetchApi()
      .then((requestData) => {
        setData(requestData);
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>Loading</h1>;

  return (
    <myContext.Provider value={ contextValue }>
      <Home />
    </myContext.Provider>
  );
}

export default App;
