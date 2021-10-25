import React from 'react';
import Page from './pages/mainpage';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Page />
    </Provider>
  );
}

export default App;
