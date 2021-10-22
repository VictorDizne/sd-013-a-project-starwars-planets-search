import React from 'react';
import Provider from './context/Provider';
import Homepage from './pages/Homepage';

import './App.css';

function App() {
  return (
    <Provider>
      <Homepage />
    </Provider>
  );
}

export default App;
