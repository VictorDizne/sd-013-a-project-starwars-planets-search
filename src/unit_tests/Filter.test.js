import PLANETS from './mockdata';

const service = require('../util');

const error = { errorMSG: 'request failed!' };
const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

describe('1 - Testa a chamada para a API/planets', () => {
  service.fetchAPI = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(PLANETS.results),
  }));
  afterEach(service.fetchAPI.mockReset);

  it('1.1 - Testa se a chamada foi realizada com sucesso', async () => {
    service.fetchAPI.mockResolvedValue(PLANETS);
    const planets = await service.fetchAPI();
    expect(service.fetchAPI).toHaveBeenCalled();
    expect(service.fetchAPI).toHaveBeenCalledTimes(1);
    expect(service.fetchAPI()).resolves.toBe(PLANETS);
    expect(service.fetchAPI).toHaveBeenCalledTimes(2);
    expect(planets.results[0]).toBe(PLANETS.results[0]);
  });
  it('1.2 - Testando se a chamada foi rejeitada', async () => {
    service.fetchAPI.mockRejectedValue(error.errorMSG);
    expect(service.fetchAPI).toHaveBeenCalledTimes(0);
    await expect(service.fetchAPI()).rejects.toMatch(error.errorMSG);
    expect(service.fetchAPI).toHaveBeenCalledTimes(1);
  });
  const fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(PLANETS),
  }));
  const fetchAPI = async (URL) => {
    try {
      const results = await fetch(URL);
      const data = await results.json();
      return data.results;
    } catch (err) {
      return { err, errorMSG: 'request faled!' };
    }
  };

  it('1.3 - Testa se o resultado do fetch está correto',
    async () => expect(fetchAPI(url)).resolves.toBe(PLANETS.results));
});
