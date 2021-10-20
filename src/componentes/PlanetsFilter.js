// import React, { useContext, useEffect, useState } from 'react';
// import contextApp from '../context/contextApp';
// // import PropTypes from 'prop-types';

// function PlanetsFilter() {
//   // const { handleSearch } = props;
//   // const filtName = { filterByName: { name: '' } };
//   const { data, filters, setFilters } = useContext(contextApp);
//   // const [filterContainer, setFilterContainer] = useState([]);
//   // const [stateName, setStateName] = useState([]);

//   // const { filterByNumber } = filtered;
//   // const {comparison, column, value } = filterByNumber;

//   // function handleSearch({ target }) {
//   //   setFilters({ filterByname: { name: target.value } });
//   // }

//   // useEffect(() => {
//   //   const filterName = () => {
//   //     const resultName = data.filter((planet) => (
//   //       planet.name.toLowerCase().includes(filterByname.name.toLowerCase())));
//   //     setFilterContainer(resultName);
//   //   };
//   //   filterName();
//   // }, [data, stateName, filters]);

//   return (
//     <form>
//       <div>
//         {/* <input
//           name="filter-name"
//           data-testid="name-filter"
//           type="text"
//           onChange={ handleSearch }
//         /> */}
//         <select testid="column-filter" size="sm">
//           <option value="population">population</option>
//           <option value="orbital_period">orbital_period</option>
//           <option value="diameter">diameter</option>
//           <option value="rotation_period">rotation_period</option>
//           <option value="surface_water">surface_water</option>
//         </select>
//         <select testid="comparison-filter" size="sm">
//           <option value="maior que">maior que</option>
//           <option value="menor que">menor que</option>
//           <option value="igual a">igual a</option>
//         </select>
//         {/* <input
//           type="number"
//           data-testid="value-filter"
//         /> */}
//         <button
//           type="submit"
//           data-testid="button-filter"
//           variant="outline-dark"
//           size="sm"
//         >
//           Filtrar
//         </button>
//       </div>
//     </form>

//   );
// }
// // PlanetsFilter.propTypes = { */}
// //  handleSearch: PropTypes.func.isRequired,

// export default PlanetsFilter;
