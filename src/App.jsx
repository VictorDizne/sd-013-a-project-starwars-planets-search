import React from 'react';
import './App.css';
import Table from './components/Table/Table';
import PlanetProvider from './context/PlanetProvider'; // mover o provider para APP para atender o requisito 1
import Header from './components/Header/Header';

const App = () => {
  const [loading, setLoading] = useState(true);
  return (

    <PlanetProvider>

      <Header />
      <Table />

    </PlanetProvider>
  );
};

export default App;
