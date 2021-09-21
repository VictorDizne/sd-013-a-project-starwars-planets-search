export const compareColumns = (arr, sortColumn, typeSort) => arr
  .sort((a, b) => {
    const BEFORE = -1;
    const AFTER = 1;
    // somente se for numeros
    if (['rotation_period', 'orbital_period', 'diameter'].includes(sortColumn)) {
      if (typeSort === 'ASC') return a[sortColumn] - b[sortColumn];
      if (typeSort === 'DESC') return b[sortColumn] - a[sortColumn];
    }

    if (
      (a[sortColumn] < b[sortColumn] && typeSort === 'ASC')
            || (a[sortColumn] > b[sortColumn] && typeSort === 'DESC')
    ) {
      return BEFORE;
    }
    if (
      (a[sortColumn] > b[sortColumn] && typeSort === 'ASC')
            || (a[sortColumn] < b[sortColumn] && typeSort === 'DESC')
    ) {
      return AFTER;
    }
    return 0;
  });

export const filterColumns = (planet, filters) => {
  const validate = filters.every((
    { column, comparison, value },
  ) => {
    if (comparison === 'maior que') {
      return Number(planet[column]) > Number(value);
    }
    if (comparison === 'menor que') {
      return Number(planet[column]) < Number(value);
    }
    if (comparison === 'igual a') {
      return Number(planet[column]) === Number(value);
    }
    return false;
  });
  return validate;
};
