import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';

function TableBody(props) {
  const { planetsList } = props;
  const { filters } = useContext(Context);
  const [myList, setMyList] = useState([]);

  function filteredList(planets, { filterByName, filterByNumericValues }) {
    let filteredName = planets.filter((planet) => (
      planet.name.includes(filterByName.name)
    ));

    if (filterByNumericValues) {
      filterByNumericValues.forEach((obj) => {
        filteredName = filteredName.filter((planet) => {
          if (obj.comparison === 'menor que') {
            return Number(planet[obj.column]) < Number(obj.value);
          }
          if (obj.comparison === 'maior que') {
            return Number(planet[obj.column]) > Number(obj.value);
          }
          return Number(planet[obj.column]) === Number(obj.value);
        });
      });
    }

    return filteredName;
  }

  useEffect(() => {
    setMyList(filteredList(planetsList, filters));
  }, [filters, planetsList]);

  return (
    <tbody>
      {myList.map((i) => (
        <tr key={ i.name }>
          <td>{i.name}</td>
          <td>{i.rotation_period}</td>
          <td>{i.orbital_period}</td>
          <td>{i.diameter}</td>
          <td>{i.climate}</td>
          <td>{i.gravity}</td>
          <td>{i.terrain}</td>
          <td>{i.surface_water}</td>
          <td>{i.population}</td>
          <td>{i.films}</td>
          <td>{i.created}</td>
          <td>{i.edited}</td>
          <td>{i.url}</td>
        </tr>
      ))}
    </tbody>
  );
}

TableBody.propTypes = {
  planetsList: PropTypes.arrayOf(PropTypes.object),
};

TableBody.defaultProps = {
  planetsList: [],
};

export default TableBody;
