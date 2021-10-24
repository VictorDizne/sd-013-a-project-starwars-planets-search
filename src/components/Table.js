import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import 'bulma/css/bulma.min.css';
import results from '../service/aux';
import Header from '../components/Header';
// vou usar o results, depois resolvo essa merda de request

function Table() {
  const { data } = useContext(MyContext);

  // functions for table
  function showData() {
    return results.map((planet) => {
      const {
        name,
        rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population, films, created, edited, url } = planet;
      return (
        <tr key={ planet.id } id={ planet.id }>
          <td><abbr title="nome">{name}</abbr></td>
          <td><abbr title="algo">{diameter}</abbr></td>
          <td><abbr title="Won">{population}</abbr></td>
          <td><abbr title="Drawn">{orbital_period}</abbr></td>
          <td><abbr title="Lost">{rotation_period}</abbr></td>
          <td><abbr title="Goals for">{climate}</abbr></td>
          <td><abbr title="Goals against">{gravity}</abbr></td>
          <td><abbr title="Goal difference">{surface_water}</abbr></td>
          <td><abbr title="Points">{terrain}</abbr></td>
          <td><abbr title="Points">{films}</abbr></td>
          <td><abbr title="Points">{created}</abbr></td>
          <td><abbr title="Points">{edited}</abbr></td>
          <td><abbr title="Points">{url}</abbr></td>
        </tr>
      );
    });
  }

  function showHeaders() {
    return (
      <thead>
        <tr>
          <th><abbr title="nome">Nome</abbr></th>
          <th><abbr title="diametro">Diâmetro</abbr></th>
          <th><abbr title="populacao">População</abbr></th>
          <th><abbr title="periodo_orbital">Período Orbital</abbr></th>
          <th><abbr title="periodo_rotacional">Período Rotacional</abbr></th>
          <th><abbr title="clima">Clima</abbr></th>
          <th><abbr title="gravidade">Gravidade</abbr></th>
          <th><abbr title="agua">Água Superficial</abbr></th>
          <th><abbr title="terreno">Terreno</abbr></th>
          <th><abbr title="filmes">Filmes</abbr></th>
          <th><abbr title="criado">Criado em</abbr></th>
          <th><abbr title="editado">Editado em</abbr></th>
          <th><abbr title="url">UR</abbr></th>
        </tr>
      </thead>
    );
  }

  function showFooter() {
    return (
      <tfoot>
        <tr>
          <th><abbr title="nome">Name</abbr></th>
          <th><abbr title="algo">Diâmetro</abbr></th>
          <th><abbr title="Won">População</abbr></th>
          <th><abbr title="Drawn">Período Orbital</abbr></th>
          <th><abbr title="Lost">Período Rotacional</abbr></th>
          <th><abbr title="Goals for">Clima</abbr></th>
          <th><abbr title="Goals against">Gravidade</abbr></th>
          <th><abbr title="Goal difference">Água Superficial</abbr></th>
          <th><abbr title="Points">Terreno</abbr></th>
          <th><abbr title="Points">Filmes</abbr></th>
          <th><abbr title="Points">Criado em</abbr></th>
          <th><abbr title="Points">Editado em</abbr></th>
          <th><abbr title="Points">UR</abbr></th>
        </tr>
      </tfoot>
    );
  }

  return (
    <>
      <Header />
      <div className="table-container">
        <table className="table">
          {showHeaders()}
          <tbody>
            {showData()}
          </tbody>
          {showFooter()}
        </table>
      </div>
    </>
  );
}

export default Table;

/*
    {/* <div>
      {
        // beleza, finalmente consegui acesso a essa poha...
        // acho q os títulos da tabela eu faço na mão..
        // ae só
      }
      {data.map((home) => <div>{home.name}</div>)}
    </div>
*/
