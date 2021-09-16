const planetAPI = async () => {
  try {
    const fetchAPI = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const apiResponse = await fetchAPI.json();
    return apiResponse;
  } catch (error) {
    return error;
  }
};

export default planetAPI;
