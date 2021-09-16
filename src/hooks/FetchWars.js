// import { useState, useEffect } from 'react';

// function FetchWars() {
// const [statewars, setStatewars] = useState([]);

// useEffect(() => {
//   const response = async () => {
//     const api = 'https://swapi-trybe.herokuapp.com/api/planets/';

//     const { results } = await fetch(api).then((result) => result.json());

//     results.forEach((item) => {
//       delete item.residents;
//     });

//     setStatewars(results);
//   };

//   response();
// }, []);

//   return ([statewars]);
// }

// export default FetchWars;
