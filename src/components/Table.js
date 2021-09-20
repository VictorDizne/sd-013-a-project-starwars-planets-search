import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const Table = () => {
  const { data, fetchApiData } = useContext(PlanetsContext);

  useEffect(() => {
    fetchApiData();
  }, [data, fetchApiData]);

  const createHeaders = () => {
    let headers;
    if (data.length !== 0) {
      headers = Object.keys(data.results[0])
        .filter((informations) => informations !== 'population');
      return (
        headers.map((informations, id) => <th key={ id }>{informations}</th>)
      );
    }
  };

  const createRows = () => {
    if (data.length !== 0) {
      const planets = data.results.map((informations) => Object.values(informations));
      return (
        planets.map((planet, id) => (
          <tr key={ id }>
            {planet.map((information, id2) => (
              <td key={ id2 }>
                { information }
              </td>))}
          </tr>))
      );
    }
  };

  return (
    <table>
      <thead>
        <tr>
          { createHeaders() }
        </tr>
      </thead>
      <tbody>
        { createRows() }
      </tbody>
    </table>
  );
};

export default Table;
