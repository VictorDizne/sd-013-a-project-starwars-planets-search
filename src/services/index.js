const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getData = () => fetch(URL).then((response) => response.json().then((data) => data));

export default getData;
