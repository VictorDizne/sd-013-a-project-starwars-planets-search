import React, { useContext } from 'react';
import Context from '../context/Context';

const Filters = () => {
  const { data, setData, setFilterText, filters: { filterText } } = useContext(Context);

  const handleChange = ({ target: { value } }) => {
    setFilterText(value);
    setData(data.filter((planet) => planet.name.includes(filterText)));
  };

  return (
    <div>
      <input
        value={ filterText }
        type="text"
        placeholder="Filtre pelo nome"
        onChange={ (e) => handleChange(e) }
        data-testid="name-filter"
      />
    </div>
  );
};

export default Filters;
