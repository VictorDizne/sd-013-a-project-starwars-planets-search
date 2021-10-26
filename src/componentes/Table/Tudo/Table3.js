// import React, { useContext, useState, useEffect } from 'react';
// import contextApp from '../context/contextApp';

// const tableColumns = [
//   'population',
//   'orbital_period',
//   'diameter',
//   'rotation_period',
//   'surface_water',
// ];

// function Table() {
//   const { data, dataError,
//     filterByNumericValues,
//     setNumericFilter,
//     setColumnList,
//     numericFilter,
//   } = useContext(contextApp);
//   const [planetasFiltrados] = useState([]);

// //   const optionsFilterRemove = () => {
// //     const newColumn = tableColumns.filter((column) => !filterByNumericValues
// //       .some((filter) => filter.column === column))
// //       .map((nextColumn) => nextColumn);
// //     console.log(newColumn);
// //     setNumericFilter((prevState) => ({
// //       ...prevState,
// //       column: newColumn[0],
// //     }));
// //     setColumnList(newColumn);
// //     console.log(numericFilter);
// //   };

// //   useEffect(optionsFilterRemove, [filterByNumericValues]);

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
//           {planetasFiltrados.map((planet, i) => (
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
