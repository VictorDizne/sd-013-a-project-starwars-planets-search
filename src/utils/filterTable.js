function filterTable({ setPlanets, data, filterNumeric, filterName }) {
  const filteredByName = data.results.filter(({ name }) => {
    const nameToLowerCase = name.toLowerCase();
    const filterToLowerCase = filterName.toLowerCase();
    return nameToLowerCase.includes(filterToLowerCase);
  });

  if (filterNumeric.length !== 0) {
    const filteredByColumns = filteredByName.filter((planet) => {
      const filterResults = filterNumeric.map((filter) => {
        const columnAsNumber = Number(planet[filter.column]);
        const valueAsNumber = Number(filter.value);

        switch (filter.comparison) {
        case 'maior que':
          return columnAsNumber > valueAsNumber;
        case 'menor que':
        // console.log('chegou aqui', columnAsNumber < valueAsNumber);
          return columnAsNumber < valueAsNumber;
        case 'igual a':
          return columnAsNumber === valueAsNumber;
        default:
          return true;
        }
      });

      // console.log(filterResults);
      const isPassingInAll = filterResults.every((value) => value === true);
      // console.log(isPassingInAll);

      return isPassingInAll;
    });

    return setPlanets(filteredByColumns);
  }

  return setPlanets(filteredByName);
}

export default filterTable;
