import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function SelectColumn(props) {
  const { handleChangeProps } = props;
  const { buttonFilter, options } = useContext(MyContext);

  console.log(buttonFilter.map((filter) => filter.column));

  return (
    <select
      id="column-filter-id"
      data-testid="column-filter"
      name="column"
      onChange={ handleChangeProps }
    >
      { options.map((option) => (
        <option
          key={ option }
          value={ option }
        >
          { option}
        </option>))}
    </select>
  );
}

SelectColumn.propTypes = {
  handleChangeProps: PropTypes.func.isRequired,
};

export default SelectColumn;
