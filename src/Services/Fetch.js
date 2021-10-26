async function Fetch() {
    const api = await fetch('https://swapi-trybe.herokuapp.com/api/planets');
    const result = await api.json();
    return result;
  }
  
  export default Fetch;
  