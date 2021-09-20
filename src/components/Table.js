import React, { useContext, useState, useEffect } from 'react';
import Context from '../context/Context';

function Table() {
  const [titlesTable, setTitlesTable] = useState([]);
  const { data, filters, setColumnFilter } = useContext(Context);

  useEffect(() => {
    if (data !== '' && data !== undefined) {
      setTitlesTable(Object.keys(data[0])
        .filter((title) => title !== 'residents'));
    }

    if (filters !== undefined) {
      const numericValue = filters.filters.filterByNumericValues;
      setColumnFilter((prevState) => (
        prevState.filter((c) => !numericValue
          .map((z) => z.column).includes(c)) !== prevState
          && prevState.filter((c) => !numericValue
            .map((z) => z.column).includes(c))
      ));
    }
  }, [data, filters, setColumnFilter]);

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

  const handleFilters = () => {
    const numericValue = filters.filters.filterByNumericValues;
    const filterByName = filters.filters.filterByName.name;
    let dataFilter = data;

    dataFilter = data.filter((item) => item.name.includes(filterByName));

    numericValue.forEach(({ column, comparison, value }) => {
      if (comparison === 'maior que') {
        dataFilter = dataFilter.filter((planet) => parseFloat(planet[column])
          > parseFloat(value));
      }
      if (comparison === 'menor que') {
        dataFilter = dataFilter.filter((planet) => parseFloat(planet[column])
          < parseFloat(value));
      }
      if (comparison === 'igual a') {
        dataFilter = dataFilter.filter((planet) => parseFloat(planet[column])
          === parseFloat(value));
      }
    });
    return dataFilter.map((planet) => contentTable(planet));
  };

  return (
    <table>
      <tbody>
        { data !== '' && headerTable()}
        { data !== '' && handleFilters() }
      </tbody>
    </table>
  );
}

export default Table;
