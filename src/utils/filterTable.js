function filterTable({ setPlanets, data, filterNumeric, filterName }) {
  const filteredByName = data.results.filter(({ name }) => {
    const nameToLowerCase = name.toLowerCase();
    const filterToLowerCase = filterName.toLowerCase();
    return nameToLowerCase.includes(filterToLowerCase);
  });

  if (filterNumeric.length !== 0) {
    const filteredByColumns = filteredByName.filter((planet) => {
      const columnAsNumber = Number(planet[filterNumeric[0].column]);
      const valueAsNumber = Number(filterNumeric[0].value);

      switch (filterNumeric[0].comparison) {
      case 'maior que':
        return columnAsNumber > valueAsNumber;
      case 'menor que':
        return columnAsNumber < valueAsNumber;
      case 'igual a':
        return columnAsNumber === valueAsNumber;
      default:
        return true;
      }
    });

    return setPlanets(filteredByColumns);
  }

  return setPlanets(filteredByName);
}

export default filterTable;
