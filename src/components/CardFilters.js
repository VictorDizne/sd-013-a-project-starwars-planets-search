import React, { useContext } from 'react';
import MyContext from '../context/PlanetsContext';
// Lucas Santos me ajudou em call
// https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/127/files?authenticity_token=hY9n7UJ0oLjIDAHb3Ayez2ynTTsnNyp0KrYo0ISCEAmHIQw%2Bev4HLj4F3Zwwr%2BZ22wkACrll4m0vXsDUnWsgng%3D%3D&file-filters%5B%5D=.js
const CardFilters = () => {
  const { setFilter, filter } = useContext(MyContext);

  // aqui faz o delete do filtro selecionado
  const handleClick = (column) => {
    const filterByNum = filter.filters.filterByNumericValues;
    setFilter({ filters: {
      ...filter.filters,
      filterByNumericValues:
        filterByNum.filter((element) => !Object.values(element).includes(column)),
    } });
  };
  // pega os valores de column, comparison e value para mostrar junto com o button.
  return (
    <div>
      {
        filter.filters.filterByNumericValues.length > 0
        && filter.filters.filterByNumericValues.map((element, index) => {
          const {
            column,
            comparison,
            value,
          } = element;

          return (
            <p key={ index } data-testid="filter">
              { `${column} ${comparison} ${value}` }
              <button type="button" onClick={ () => { handleClick(column); } }>x</button>
            </p>
          );
        })
      }
    </div>
  );
};

export default CardFilters;
