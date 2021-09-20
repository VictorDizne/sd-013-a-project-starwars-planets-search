import React from 'react';
import './App.css';
import PlanetsTable from './pages/PlanetsTable';
import SWProvider from './contextAPI/SWProvider';
import useFetchSW from './hooks/useFetchSW';

function App() {
  const [, isLoading] = useFetchSW();
  return (
    <SWProvider>
      {isLoading ? 'loading...' : <PlanetsTable />}
    </SWProvider>
  );
}

export default App;
