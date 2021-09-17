import React from 'react';

const tds = (
  <>
    <td>Tatooine</td>
    <td>23</td>
    <td>304</td>
    <td>10465</td>
    <td>arid</td>
    <td>1 standard</td>
    <td>desert</td>
    <td>1</td>
    <td>200000</td>
    <td>https://swapi-trybe.herokuapp.com/api/films/1/https://swapi-trybe.herokuapp.com/api/films/3/https://swapi-trybe.herokuapp.com/api/films/4/https://swapi-trybe.herokuapp.com/api/films/5/https://swapi-trybe.herokuapp.com/api/films/6/</td>
    <td>2014-12-09T13:50:49.641000Z</td>
    <td>2014-12-20T20:58:18.411000Z</td>
    <td>https://swapi-trybe.herokuapp.com/api/planets/1/</td>
  </>);

const columns = [tds, tds, tds, tds, tds, tds, tds, tds, tds];

function EmptyBody() {
  return (
    <>
      {
        columns.map((row, index) => (
          <tr key={ index }>
            {row}
          </tr>
        ))
      }
    </>
  );
}

export default EmptyBody;
