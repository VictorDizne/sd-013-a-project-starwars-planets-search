import React from 'react';
import './App.css';
import FilterSelector from './components/FilterSelector';
import SearchBar from './components/SearchBar';
import Table from './components/Table';
// import PlanetContext from './context/PlanetContext';
import PlanetProvider from './context/PlanetProvider';

function App() {
  // const data = {}

  return (
    <PlanetProvider>
      <SearchBar />
      <FilterSelector />
      <Table />
      <div>
        {/* <span>Hello, App!</span> */}
        <ul>
          {/* {
            planets.map((planet) => <li key={ planet.name }>{planet.name}</li>)
          } */}
        </ul>
      </div>
    </PlanetProvider>
  );
}

export default App;
