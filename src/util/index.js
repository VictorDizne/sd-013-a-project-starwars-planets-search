export const htmlID = (props) => {
  const { name } = props;
  const hexIdChars = '0123456789ABCDEF';
  const KEY_LENGTH = 40;
  let id = name;
  for (let i = 0; i < KEY_LENGTH; i += 1) {
    id += hexIdChars[Math.floor(Math.random() * hexIdChars.length)];
  }
  return id;
};

export const fetchAPI = async (URL) => {
  try {
    const results = await fetch(URL);
    const data = await results.json();
    return data;
  } catch (error) {
    return { error, errorMSG: 'request faled!' };
  }
};
export const getComparisonSymbol = (comparison) => {
  switch (comparison) { // "reducer" de comparações
  case 'maior que':
    return '>';
  case 'igual a':
    return '=';
  case 'menor que':
    return '<';
  default:
    throw new Error('Comparisson not in ComparisonsValues');
  }
};

export const orderByColumn = (array, { column, sort }) => {
  if (sort === 'ASC') {
    return array.sort(
      (p1, p2) => p1[column].localeCompare(p2[column], 'en', { numeric: true }),
    );
  }
  // sort === 'DESC'
  return array.sort(
    (p1, p2) => p2[column].localeCompare(p1[column], 'en', { numeric: true }),
  );
};

export const notEqual = (obj1, obj2) => JSON.stringify(obj1) !== JSON.stringify(obj2);
// export const sum = (a, b) => a + b;
// module.exports = { sum, htmlID, fetchAPI, fetchJoke };
