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

export const fetchJoke = () => fetch(URL, { headers: { Accept: 'application/json' } })
  .then((response) => response.json())
  .then((data) => data.joke);

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
// export const sum = (a, b) => a + b;
// module.exports = { sum, htmlID, fetchAPI, fetchJoke };
