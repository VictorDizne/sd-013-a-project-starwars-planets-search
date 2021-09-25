import React, { useContext } from 'react';
import tableContext from '../context';

const InputSearch = () => {
  const { setFilters, filters } = useContext(tableContext);
  return (
    <form action="">
      <label className="LabelMuda" htmlFor="input-search">
        Planetas:
        <input
          data-testid="name-filter"
          type="text"
          onChange={ (e) => setFilters({
            ...filters, filterByName: { name: e.target.value } }) }
          id="input-search"
        />
      </label>
    </form>
  );
};

export default InputSearch;
