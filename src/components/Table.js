import React, { useContext } from 'react';
import Context from '../context/Context';

function Table() {
  const { state: { planets }, filters } = useContext(Context);
  const { filterByName: { name }, filterByNumericValues, order } = filters;
  const { column: columnSort, sort } = order;

  const renderTableHeaders = () => (
    <thead>
      <tr>
        <th>Name</th>
        <th>Rotation Period</th>
        <th>Orbital Period</th>
        <th>Diameter</th>
        <th>Climate</th>
        <th>Gravity</th>
        <th>Terrain</th>
        <th>Surface Water</th>
        <th>Population</th>
        <th>Films</th>
        <th>Created</th>
        <th>Edited</th>
        <th>URL</th>
      </tr>
    </thead>
  );

  const handleSort = () => {
    const sortPlanets = [...planets];
    if (sort === 'ASC') {
      sortPlanets.sort(({ [columnSort]: a }, { [columnSort]: b }) => (
        // sugestao retirada do Stackoverflow https://stackoverflow.com/questions/2802341/javascript-natural-sort-of-alphanumerical-strings
        new Intl.Collator('en', { numeric: true }).compare(a, b)));
    }
    if (sort === 'DESC') {
      sortPlanets.sort(({ [columnSort]: a }, { [columnSort]: b }) => (
        // sugestao retirada do Stackoverflow https://stackoverflow.com/questions/2802341/javascript-natural-sort-of-alphanumerical-strings
        new Intl.Collator('en', { numeric: true }).compare(b, a)));
    }
    return sortPlanets;
  };

  const handleFilter = () => {
    // copia do estado, dado principio da imutabilidade, ou seja, nao modificar o array original
    let filteredPlanets = handleSort();
    if (name) {
      filteredPlanets = filteredPlanets
        .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()));
    }
    if (filterByNumericValues.length > 0) {
      // forEach porque e um array com mais de um filtro
      filterByNumericValues.forEach((filter) => {
        const { column, comparison, value } = filter;
        // filteredPlanets recebe o proprio filtered planets filtrado por nome ou o proprios filtered planets copiado do context
        filteredPlanets = filteredPlanets
          .filter((planet) => {
            switch (comparison) {
            case 'maior que':
              return Number(planet[column]) > Number(value);

            case 'igual a':
              return Number(planet[column]) === Number(value);

            case 'menor que':
              return Number(planet[column]) < Number(value);

            default: return true;
            }
          });
      });
    }
    return filteredPlanets;
  };

  const renderTableBody = () => (
    // trecho de codigo retirado do Thalles Carneiro - Turma 12
    // https://github.com/tryber/sd-012-project-starwars-planets-search/pull/107/commits/d6ceb78803965ab83793da3601d9b3c06fd73454
    <tbody>
      {handleFilter().map((planet) => (
        <tr
          key={ planet.name }
        >
          <td data-testid="planet-name">{planet.name}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.diameter}</td>
          <td>{planet.climate}</td>
          <td>{planet.gravity}</td>
          <td>{planet.terrain}</td>
          <td>{planet.surface_water}</td>
          <td>{planet.population}</td>
          <td>{planet.films}</td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
          <td>{planet.url}</td>
        </tr>))}
    </tbody>
  );

  return (
    <div className="table-container">
      <table className="table">
        {renderTableHeaders()}
        {renderTableBody()}
      </table>
    </div>
  );
}

export default Table;

// Sources:
// https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/139/
// Repositório da Elaine 13A
// Auxílio do Lima Lima
