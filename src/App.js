import React from 'react';
import Page from './components/Page';
import SWProvider from './context/Provider';

function App() {
  return (
    <SWProvider>
      <Page />
    </SWProvider>
  );
}

export default App;
