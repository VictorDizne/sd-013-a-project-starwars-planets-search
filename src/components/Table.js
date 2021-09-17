import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Table = () => {
  const { data, filter } = useContext(AppContext); // desestrutura data usando o useContext.
  const { filterByName: { name } } = filter;
  if (!data.length) return <span>Loading...</span>; // caso não haja length retorna loading na tela.
  const tableItens = Object.keys(data[0]).filter((key) => key !== 'residents');
  const filteredData = data
    .filter((planet) => planet.name.toLowerCase()
      .includes(name.toLowerCase()));
  return (
    <table>
      <thead>
        <tr>
          { tableItens.map((itens) => (
            <th key={ itens }>{itens}</th> // aqui renderiza as keys da api como header
          ))}
        </tr>
      </thead>
      <tbody>
        { filteredData.map((planet) => (
          <tr key={ planet.name }>
            {tableItens.map((item) => (
              <td key={ planet[item] }>
                {planet[item]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
