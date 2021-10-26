// import React, { useContext, useState, useEffect } from 'react';
// // import PlanetsFilter from '../componentes/PlanetsFilter';
// import contextApp from '../context/contextApp';

// function Table() {
//   const { data, filters } = useContext(contextApp);
//   const [test, setTest] = useState([]);

//   const { dataError, filters: {
//     filterByName, filterByNumericValues } } = useContext(contextApp);

//   const [planets, setPlanets] = useState([]);
//   // Funçao ok
//   const FilterName = (array) => {
//     if (!filterByName.name) {
//       return array;
//     }
//     if (filterByName.name) {
//       return array.filter(({ name }) => name.includes(filterByName.name));
//     }
//   };

//   const renderiza = () => {
//     setTest(FilterName(data));
//   };

//   const filterNumericValues = (planetsData, column, comparison, value) => {
//     let filteredPlanets;

//     if (comparison === 'maior que') {
//       filteredPlanets = planetsData.filter((planet) => (
//         Number(planet[column]) > Number(value)
//       ));
//     }

//     if (comparison === 'menor que') {
//       filteredPlanets = planetsData.filter((planet) => (
//         Number(planet[column]) < Number(value)
//       ));
//     }
//     if (comparison === 'igual a') {
//       filteredPlanets = planetsData.filter((planet) => (
//         Number(planet[column]) === Number(value)
//       ));
//     }
//     return filteredPlanets;
//   };

//   // const FilterValue = (array) => filterNumericValues(array, column, comparison, value);

//   // filterByNumericValues.forEach(({ column, comparison, value }) => (
//   //     value && setPlanets((prevPlanets) => {
//   //       if (prevPlanets.length < 1) {
//   //         if (!filterByName.name) {
//   //           return filterNumericValues(data, column, comparison, value);
//   //         }
//   // const filteredByName = data.filter(({ name }) => (
//   //   name.includes(filterByName.name)
//   // ));
//   // return filterNumericValues(prevPlanets, column, comparison, value);
//   //   })
//   // ));
//   // console.log('table2');
//   // console.log(data);
//   // console.log(filterByName);
//   // console.log(prevPlanets.length < 1 ? 'testa' : prevPlanets);
//   // }, [data, filterByName, filterByNumericValues]);
//   // console.log(planets);
//   // console.log(test);
//   // useEffect(FilterValue(renderiza)), [data, filterByName, column, comparison, value];
//   return (data.length > 0 && !dataError)
//     && (
//       <table>
//         <thead>
//           <tr>
//             {Object.keys(data[0]).map((header, index) => (
//               <th key={ index }>{header}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {planets.map((planet, i) => (
//             <tr key={ i }>
//               {Object.keys(planet).map((column, j) => (
//                 <td key={ j }>{planet[column]}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
// }

// export default Table;
