import React from 'react';
import './App.css';
import Provider from './helpers/Provider';
import Main from './pages/Main';

function App() {
  return (
    <Provider>
      <Main />
    </Provider>
  );
}

export default App;
