/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState } from 'react';
import StarWarsContext from '../context';

const Table = () => {
  const { state, setState } = useContext(StarWarsContext);
  const { header, data } = state;
  const [saveResults, setSaveResults] = useState([]);
  // const [loading, setLoading] = useState(true);

  // const fetchData = async () => {
  //   const response = await fetch(url);
  //   const { results } = await response.json();
  //   setState({
  //     ...state,
  //     data: results });
  //   setLoading(false);
  // };

  useEffect(() => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    // const url = 'https://swapi.dev/api/planets/';
    // fetchData();
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        const { results } = json;
        // setState({
        //   ...state,
        //   data: results,
        // });
        // console.log('json', json);
        // console.log('results', results);
        setSaveResults(results);
      })
      .catch((error) => console.log(`Problem ${error.message}`));
  }, []);

  const fillData = () => {
    // console.log('chamou o fillData');
    // console.log('saveResults no fillData', saveResults);
    setState({
      ...state,
      data: saveResults,
    });
  };

  useEffect(() => {
    // console.log('data', data);
    fillData();
  }, [saveResults]);

  return (
    <table>
      <thead>
        <tr>
          {header.map((item) => <th key={ item }>{item}</th>)}
        </tr>
      </thead>
      <tbody>
        {/* {data ? null : setState({ ...state, data: saveResults })} */}
        {
          data && data.map((planet) => (
            <tr key={ planet.name }>
              { delete planet.residents }
              { Object.values(planet).map((info) => <td key={ info }>{info}</td>)}
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default Table;
