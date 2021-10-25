export function handleChange({ target }, setFilters, filters) {
  setFilters({
    ...filters,
    filterByName: {
      name: target.value,
    },
  });
}

export function handleSubmit(e, filterByNumericValues, setFilters, filters) {
  e.preventDefault();
  const { target: { children } } = e;
  if (filterByNumericValues[0].column !== '') {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column: children[1].value,
          comparison: children[2].value,
          value: children[3].value,
        },
      ],
    });
  } else {
    setFilters({
      ...filters,
      filterByNumericValues: [{
        column: children[1].value,
        comparison: children[2].value,
        value: children[3].value,
      }],
    });
  }
  const findColumn = Object.values(children[1].children)
    .findIndex((option) => option.value === children[1].value);
  children[1].children[findColumn].remove();
  // console.log(children[1]);
}

export function handleClick(e, filterByNumericValues, setFilters, filters) {
  const { target: { id } } = e;
  if (filterByNumericValues.length > 1) {
    setFilters({
      ...filters,
      filterByNumericValues: filterByNumericValues
        .filter((filter) => filter.column !== id),
    });
  } else {
    setFilters({
      ...filters,
      filterByNumericValues:
      [{
        column: '',
        comparison: '',
        value: '',
      }],
    });
  }
  const columns = document.querySelector('#column');
  const options = document.createElement('option');
  options.value = id;
  options.textContent = id;
  columns.appendChild(options);
  // console.log(id);
}

export function handleSelectOrder() {
  const columns = document.getElementsByTagName('option');
  const select = document.querySelector('#sort');
  const capture = document.querySelectorAll('#info');
  if (capture.length > 1) {
    capture.forEach((option) => option.remove());
  }
  Object.values(columns).forEach((c) => {
    if (c.value !== 'maior que' && c.value !== 'menor que' && c.value !== 'igual a') {
      const option = document.createElement('option');
      // console.log(columns);
      option.value = c.value;
      option.textContent = c.textContent;
      option.id = 'info';
      select.appendChild(option);
      // console.log(option);
    }
    // console.log();
  });
}

export function handleSort(e, setFilters, filters) {
  e.preventDefault();
  const { target: { children } } = e;
  const ASC = children[1].children[0].checked;
  // console.log(children[1].children[0].checked);
  setFilters({
    ...filters,
    order:
        {
          columnName: children[0].value,
          sort: ASC ? 'ASC' : 'DESC',
        },
  });
}

export function generalSort(a, b, columnName, sort) {
  const negativeOne = -1;
  const one = 1;
  const zero = 0;
  if (columnName === 'name') {
    if ((a[columnName] < b[columnName]) && (sort === 'ASC')) return negativeOne;
    if ((a[columnName] > b[columnName]) && (sort === 'DESC')) return one;
    return zero;
  }
  if (columnName !== 'name') {
    if (sort === 'ASC') return a[columnName] - b[columnName];
    if (sort === 'DESC') return b[columnName] - a[columnName];
    return zero;
  }
}
