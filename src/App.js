import React from 'react';
import MainPage from './pages/MainPage';
import Provider from './context/Provider';

export function App() {
  return (
    <Provider>
      <MainPage />
    </Provider>
  );
}
export default App;
