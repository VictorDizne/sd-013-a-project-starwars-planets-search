import React, { useContext, useState, useEffect } from 'react';
import Context from './context/Context';
import './App.css';

function Table() {
  const [titlesTable, setTitlesTable] = useState([]);
  const { data } = useContext(Context);

  useEffect(() => {
    if (data !== '') {
      setTitlesTable(Object.keys(data[0]).filter((title) => title !== 'residents'));
    }
  }, [data]);

  const contentTable = (planet) => (
    <tr>
      { titlesTable.map((title, index) => <td key={ index }>{planet[title]}</td>) }
    </tr>
  );

  const headerTable = () => (
    <tr>
      { titlesTable.map((title, index) => <th key={ index }>{title}</th>) }
    </tr>
  );

  return (
    <table>
      <tbody>
        { data !== '' && headerTable()}
        { data !== '' && data.map((planet) => contentTable(planet))}
      </tbody>
    </table>
  );
}

export default Table;
