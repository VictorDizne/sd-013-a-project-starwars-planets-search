import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Table = () => {
  const { data } = useContext(AppContext); // desestrutura data usando o useContext.
  if (!data.length) return <span>Loading...</span>; // caso não haja length retorna loading na tela.
  const tableItens = Object.keys(data[0]).filter((key) => key !== 'residents');
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
        { data.map((planet) => (
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
