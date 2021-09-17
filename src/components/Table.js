import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Table = () => {
  const { contextValue } = useContext(AppContext);
  const { planets, isLoading, filters: {
    filters: {
      filterByName: { name },
    },
  } } = contextValue;

  if (isLoading) {
    return (
      <div>Carregando...</div>
    );
  }

  return (
    <div>
      <table>
        <tr>
          {Object.keys(planets[0]).map((key) => (
            <th key={ key }>{ key}</th>
          ))}
        </tr>
        {planets
          .filter((planet) => planet.name.includes(name))
          .map((planet) => (
            <tr key={ planet.name }>
              {Object.values(planet).map((value) => (
                <td key={ value }>{value}</td>
              ))}
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Table;
