import React, { useContext, useEffect } from 'react';
import Context from '../context/AppContext';

function Table() {
  const { data, filters,
    setTitlesContentTable, titlesContentTable } = useContext(Context);

  useEffect(() => {
    if (data !== '' && data !== undefined) {
      setTitlesContentTable(Object.keys(data[0])
        .filter((titleItem) => titleItem !== 'residents'));
    }
  }, [data, setTitlesContentTable]);

  const handleFilters = () => {
    const { filterByNumericValues, filterByName: { name } } = filters.filters;
    let filterData = data;

    filterData = data.filter((item) => item.name.includes(name));

    filterByNumericValues.forEach(({ column, comparison, value }) => {
      if (comparison === 'maior que') {
        filterData = filterData.filter((planet) => parseFloat(planet[column])
          > parseFloat(value));
      }
      if (comparison === 'menor que') {
        filterData = filterData.filter((planet) => parseFloat(planet[column])
          < parseFloat(value));
      }
      if (comparison === 'igual a') {
        filterData = filterData.filter((planet) => parseFloat(planet[column])
          === parseFloat(value));
      }
    });
    return filterData;
  };

  const bodyTableContent = (item) => (
    <tr>
      { titlesContentTable.map((title, index) => {
        if (index === 0) {
          return (
            <td
              data-testid="planet-name"
              key={ index }
              style={ { textAlign: 'center' } }
            >
              {item[title]}
            </td>
          );
        }
        return (
          <td key={ index } style={ { textAlign: 'center' } }>{item[title]}</td>
        );
      }) }
    </tr>
  );

  const headerTableContent = () => (
    <tr>
      { titlesContentTable.map((title, index) => <th key={ index }>{title}</th>) }
    </tr>
  );

  const handleOrder = () => {
    const { order } = filters.filters;

    // https://github.com/tryber/sd-013-a-project-starwars-planets-search/blob/felipe-lima-project-starwars-planet-search/src/components/Table.js
    return handleFilters()
      .sort((a, b) => {
        let A = a[order.column]; // ignora upper e lowercase
        let B = b[order.column]; // ignora upper e lowercase

        A = parseInt(A, 10) ? parseFloat(A) : A;
        B = parseInt(B, 10) ? parseFloat(B) : B;

        if (A < B) {
          return order.sort === 'ASC' ? parseInt('-1', 10) : 1;
        }
        if (A > B) {
          return order.sort !== 'ASC' ? parseInt('-1', 10) : 1;
        }
        return 0;
      })
      .map((item) => bodyTableContent(item));
  };

  return (
    <table>
      <thead>
        { data !== '' && headerTableContent() }
      </thead>
      <tbody>
        { data !== '' && handleOrder() }
      </tbody>
    </table>
  );
}

export default Table;
