import React from 'react';

import './styles/App.css';

import Home from './pages/Home';

import AppProvider from './providers/AppProvider';

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
