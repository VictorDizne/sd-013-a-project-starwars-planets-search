import React from 'react';
import './App.css';
import Home from './Pages/Home';
import AppProvider from './providers/AppProvider';

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
