import React from 'react';
import './App.css';
import Table from './components/Table/Table';
import PlanetProvider from './context/PlanetProvider'; // mover o provider para APP para atender o requisito 1
import Header from './components/Header/Header';
import TableManager from './components/Table/TableManager';

const App = () =>
  // const [loading, setLoading] = useState(true);
  (

    <PlanetProvider>

      <Header />
      <TableManager />

    </PlanetProvider>
  );
export default App;
