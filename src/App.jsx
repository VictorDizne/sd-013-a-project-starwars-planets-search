import React from 'react';
import './App.css';
import Table from './components/Table';
import PlanetProvider from './context/PlanetProvider'; // mover o provider para APP para atender o requisito 1

function App() {
  // const [loading, setLoading] = useState(true);
  return (

    <PlanetProvider>
      <Table />
    </PlanetProvider>

  );
}

export default App;
