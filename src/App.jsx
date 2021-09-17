import React, { useEffect, useState } from 'react';
import './App.css';
//
function App() {
  // componentDidMount
  useEffect(async () => {
    const results = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const planets = await results.json();
    console.log(planets);
  }, []);
  return (
    <span>Hello, App!</span>
  );
}

export default App;
