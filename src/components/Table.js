import React from 'react';
import PropTypes from 'prop-types';

export default function Table(props) {
  // const name = props.filters.filterByName.name;
  // useEffect(() => <p>{name}</p>, [name]);
  const { planets } = props;
  return (
    <table>
      {console.log(planets)}
    </table>
  );
}

Table.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
};
