import React, { useContext } from 'react';
import Context from '../Context/Context';
import './TableStyles.css';

const Table = () => {
  const {
    data: { results },
    filters: {
      filterByName: { name },
      // filterByNumericValues,
      // order,
    } } = useContext(Context);

  function byName(planets, text) {
    return planets.filter((planet) => planet.name.toLowerCase().includes(text));
  }

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
        {byName(results, name).map(
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
