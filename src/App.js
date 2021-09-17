import React from 'react';
import Main from './components/main';
import ContextProvider from './context/context';

function App() {
  return (
    <ContextProvider>
      <Main />
    </ContextProvider>
  );
}

export default App;
