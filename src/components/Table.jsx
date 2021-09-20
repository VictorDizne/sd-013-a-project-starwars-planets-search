import React, { useContext } from 'react';
import Context from '../Context/Context';
import './TableStyles.css';

const Table = () => {
  const {
    data: { results },
    filters: {
      filterByName: { name },
      filterByNumericValues,
      // order,
    } } = useContext(Context);

  const byName = (planets, text) => planets
    .filter((planet) => planet.name.toLowerCase().includes(text));

  const byNumericValue = (planets) => {
    let planetFiltered = planets;
    if (filterByNumericValues.length === 0) return planets;
    filterByNumericValues.forEach((element) => {
      const { column, comparison, value } = element;
      switch (comparison) {
      case 'maior que':
        planetFiltered = planetFiltered
          .filter((planet) => parseInt(planet[column], 10) > value);
        break;
      case 'menor que':
        planetFiltered = planetFiltered
          .filter((planet) => parseInt(planet[column], 10) < value);
        break;
      case 'igual a':
        planetFiltered = planetFiltered
          .filter((planet) => planet[column] === value);
        break;
      default:
        break;
      }
    });
    return planetFiltered;
  };

  // useEffect(() => {}, []); ComponentDidMount
  if (!results) return <div className="loading">carregando</div>;
  return (
    <table className="App-table">
      <thead className="table-head">
        <tr>
          {Object.keys(results[0]).map((key) => (
            <th key={ key }>{`${key.replace('_', ' ')}`}</th>
          ))}
        </tr>
      </thead>
      <tbody className="table-body">
        {byNumericValue(byName(results, name)).map(
          (planet, i) => (
            <tr
              key={ i }
            >
              {Object.values(planet).map((value) => (
                <td
                  key={ value }
                  data-testid={ planet.name === value ? 'planet-name' : null }
                >
                  {value.includes('https')
                    ? <a href={ value }>{`Planet: ${value.split('/')[5]}`}</a>
                    : value }
                </td>
              ))}
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
};

export default Table;

// scr da branch palenske-starwars-planets-search do projeto do Palesk turma 11
