// import React, { useState, useEffect } from "react";
// import Context from '../context/Context';

// function Provider() {
//   const [dataPlanets, setdataPlanets] = useState([1]);
//   const planets = { dataPlanets };

//   useEffect(() => {
//     const fetchApi = async () => {
//       const planetsURL = 'https://swapi-trybe.herokuapp.com/api/planets/';
//       const response = await fetch(planetsURL)
//         .then((result) => result.json());
//       setdataPlanets(response.results);
//     };
//     fetchApi();
//   }, []);
//   return (
//     <Context.Provider value={ planets }>Nothing yet</Context.Provider>
//   )
// }

// export default Provider;
