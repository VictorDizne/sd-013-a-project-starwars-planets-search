import React from 'react';
import './App.css';
import Table from './components/Table';
import StarWarsContextProvider from './context/StarWarsContext';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <StarWarsContextProvider>
      <ThemeContextProvider>
        <Table />
      </ThemeContextProvider>
    </StarWarsContextProvider>
  );
}

export default App;
