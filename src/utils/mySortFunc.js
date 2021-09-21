const numericValues = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const numericSort = (obj, rules) => {
  obj.sort((a, b) => {
    if (rules.sort === 'ASC') {
      return a[rules.column] - b[rules.column];
    }
    return b[rules.column] - a[rules.column];
  });
};

const stringSort = (obj, rules) => {
  const magicNumber = -1;
  obj.sort((a, b) => {
    if (rules.sort === 'ASC') {
      if (a[rules.column] > b[rules.column]) {
        return 1;
      }
      if (a[rules.column] < b[rules.column]) {
        return magicNumber;
      }
    } else {
      if (a[rules.column] < b[rules.column]) {
        return 1;
      }
      if (a[rules.column] > b[rules.column]) {
        return magicNumber;
      }
    }
    return 0;
  });
};

const sortFunc = (obj, rules) => {
  let isNumeric = false;
  numericValues.forEach((value) => {
    if (rules.column === value) {
      isNumeric = true;
    }
  });
  if (isNumeric) {
    numericSort(obj, rules);
  } else {
    stringSort(obj, rules);
  }
};

export default sortFunc;
