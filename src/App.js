import React from 'react';
import './App.css';
import Planets from './page/planet';
import Provider from './Providers/Provider';

function App() {
  return (
    <Provider>
      <Planets />
    </Provider>
  );
}

export default App;
