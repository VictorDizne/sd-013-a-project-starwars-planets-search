import React from 'react';
import './App.css';
import Column from './components/Column';
import Search from './components/Search';
import Provider from './context/Provider';
import CardFilters from './components/CardFilters';

function App() {
  return (
    <div>
      <Provider>
        <Search />
        <CardFilters />
        <Column />
      </Provider>
    </div>
  );
}

export default App;
