import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

function Table() {
  // const [titlesTable, setTitlesTable] = useState([]);
  const { data, filters, setTitlesTable, titlesTable } = useContext(Context);

  useEffect(() => {
    if (data !== '' && data !== undefined) {
      setTitlesTable(Object.keys(data[0])
        .filter((title) => title !== 'residents'));
    }
  }, [data, setTitlesTable]);

  const contentTable = (planet) => (
    <tr>
      { titlesTable.map((title, index) => (index === 0
        ? <td data-testid="planet-name" key={ index }>{planet[title]}</td>
        : <td key={ index }>{planet[title]}</td>)) }
    </tr>
  );

  const headerTable = () => (
    <tr>
      { titlesTable.map((title, index) => <th key={ index }>{title}</th>) }
    </tr>
  );

  const handleFilters = () => {
    const { filterByNumericValues, filterByName: { name } } = filters.filters;
    let dataFilter = data;

    dataFilter = data.filter((item) => item.name.includes(name));

    filterByNumericValues.forEach(({ column, comparison, value }) => {
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

    return dataFilter;
  };

  const handleOrder = () => {
    const { order } = filters.filters;

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    return handleFilters()
      .sort((a, b) => {
        let A = a[order.column]; // ignore upper and lowercase
        let B = b[order.column]; // ignore upper and lowercase

        A = Number(A) ? parseFloat(A) : A;
        B = Number(B) ? parseFloat(B) : B;

        if (A < B) {
          return order.sort === 'ASC' ? Number('-1') : 1;
        }
        if (A > B) {
          return order.sort !== 'ASC' ? Number('-1') : 1;
        }
        return 0;
      })
      .map((planet) => contentTable(planet));
  };

  return (
    <table>
      <tbody>
        { data !== '' && headerTable()}
        { data !== '' && handleOrder() }
      </tbody>
    </table>
  );
}

export default Table;
