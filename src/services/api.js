const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
const error = 'Failed to fetch data';

const getData = async () => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw Error(error);
    const json = await res.json();
    return json;
  } catch (e) {
    throw new Error(e);
  }
};

export default getData;
