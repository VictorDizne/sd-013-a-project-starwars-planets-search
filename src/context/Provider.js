import React, { useEffect, useState } from 'react';
import { oneOfType, arrayOf, node } from 'prop-types';
import reqAPI from '../services/Api';
import MyContext from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoadind] = useState(true);
  const [name, setName] = useState({
    filters:
      {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [
          {
            column: 'population',
            comparison: 'maior que',
            value: '',
          },
        ],
      },
  }); /* state para o filter */

  // const getPlanets = async () => {
  //   const getAPI = await reqAPI();
  //   getAPI.forEach((element) => delete element.residents);
  //   setData(getAPI);
  //   setLoadind(false);
  // };

  // const handleChange = ({ target: { value } }) => {
  //   setFilters({ filters: { filtersByName: { name: value } } });
  // };

  useEffect(() => {
    reqAPI()
      .then((dados) => {
        dados
          .forEach((dado) => delete dado.residents);
        setData(dados);
        setLoadind(false);
      });
  }, []);

  const context = { data, loading, ...name, setName };

  return (
    <MyContext.Provider value={ context }>
      { children }
    </MyContext.Provider>
  );
}
export default Provider;

Provider.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
  ]).isRequired,
};
