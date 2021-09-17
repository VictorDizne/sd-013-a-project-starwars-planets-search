import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [tableData, setTableData] = useState([]);
  const [filters, setFilters] = useState(
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column: 'population',
          comparison: 'maior que',
          value: '100000',
        },
      ],
    },
  );

  const [filteredPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    const filterPlanets = tableData
      .filter((planet) => planet.name.toLowerCase().includes(filters.filterByName.name));
    setFilteredPlanets(filterPlanets);
  }, [filters, tableData]);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();
      return data.results;
    };
    fetchResults().then((results) => setTableData(results));
  }, []);

  const handleChange = ({ target }) => {
    if (target.id === 'name') {
      setFilters({ filterByName: { name: target.value } });
    }
  };

  useEffect(() => {
    setFilteredPlanets(tableData);
  }, [tableData]);

  // console.log(filters, 'filters');
  // console.log(tableData, 'tableData');
  // console.log(filteredPlanets, 'FilteredPlanets');

  const planetValue = { tableData, setTableData, filters, handleChange, filteredPlanets };

  return (
    <PlanetContext.Provider value={ planetValue }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;

// filterMovies(movieList) {
//   const { bookmarkedOnly, selectedGenre, searchText } = this.state;

//   const search = movieList.filter((movie) => {
//     const check = (movie.title.toLowerCase().includes(searchText.toLowerCase())
//     || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
//     || movie.storyline.toLowerCase().includes(searchText.toLowerCase()));
//     return check;
//   });

//   const favorite = bookmarkedOnly ? search.filter((movie) => movie.bookmarked) : search;

//   const result = selectedGenre ? favorite
//     .filter((movie) => movie.genre === selectedGenre) : favorite;
//   return result;
// }
