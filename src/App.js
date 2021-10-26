import React from 'react';
import Provider from './Context/Provider';
import InitialPage from './Pages/InitialPage';
// PROJETO FEITO COM AJUDA DE JOSUÉ LOBO

function App() {
  return (
    <Provider>
    <InitialPage />
  </Provider>
  );
}

export default App;
