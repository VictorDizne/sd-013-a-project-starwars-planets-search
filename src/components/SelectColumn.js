// Sequência de renderização no App.js: 2º
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function SelectColumn(props) {
  const { handleChangeProps } = props;
  const { options } = useContext(MyContext);
  /*   const [column, setColumn] = useState(options[0]);

  useEffect(() => {
    setColumn(options[0]);
  }, [options]);
 */
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
