import React, { useContext } from 'react';
import Context from '../Context/Context';

function InputName() {
  const {
    filter,
    // filter: { filters: { filterByName: { name } } },
    setFilter,
  } = useContext(Context);
  // console.log(Context);

  const handleChangeName = ({ target: { value } }) => {
    const lowerCaseValue = value.toLowerCase();
    setFilter({ filters: { ...filter.filters, filterByName: { name: lowerCaseValue } } });
  };

  return (
    <label htmlFor="name">
      Pesquise pelo nome do planeta:
      <input
        type="text"
        data-testid="name-filter"
        id="name"
        value={ filter.filters.filterByName.name }
        onChange={ (e) => handleChangeName(e) }
      />
    </label>
  );
}

export default InputName;
