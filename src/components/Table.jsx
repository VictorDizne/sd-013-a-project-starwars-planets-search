import React, { useContext } from 'react';
import Context from '../Context/Context';

const Table = () => {
  const {
    data: { results },
  } = useContext(Context);

  // useEffect(() => {}, []); ComponentDidMount
  if (!results) return <div className="loading">carregando</div>;
  return (
    <table className="App-table">
      <thead className="table-head">
        <tr
          style={ { display: 'flex',
            marginRight: '4px',
            minWidth: '70px',
            maxWidth: '70px',
            maxHeight: '35px' } }
        >
          {Object.keys(results[0]).map((key) => (
            <th key={ key }>{`${key.replace('_', ' ')}`}</th>
          ))}
        </tr>
      </thead>
      <tbody className="table-body">
        {results.map(
          (planet, i) => (
            <tr style={ { display: 'flex' } } key={ i }>
              {Object.values(planet).map((value) => (
                <td
                  style={ { marginRight: '4px', minWidth: '70px', maxWidth: '70px', overflow: 'hidden', maxHeight: '35px' } }
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
