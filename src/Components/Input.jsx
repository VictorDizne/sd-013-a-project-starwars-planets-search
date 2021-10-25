import React, { useContext } from 'react';
import Context from '../Context/Context';

function Input() {
  const {
    filter,
    filter: { filters: { filterByName: { name } } },
    setFilter,
  } = useContext(Context);

  // const [input, setInput] = useState({
  //   search: '',
  // });

  const handleChange = ({ target: { value } }) => {
    setFilter({ ...filter, filters: { filterByName: { name: value } } });
  };

  // const { search } = input;
  return (
    <input
      type="text"
      data-testid="name-filter"
      id="name"
      value={ name }
      onChange={ (e) => handleChange(e) }
    />
  );
}

export default Input;
