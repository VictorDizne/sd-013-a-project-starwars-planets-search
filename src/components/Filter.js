import React, { useContext } from 'react';
import MyContext from '../context/Context';

const Filter = () => {
  // const [filters, setFilters] = useState({
  //   filterByName: {
  //     name: '',
  //   },
  // });

  const { filters, setFilters } = useContext(MyContext);

  const handleChangeName = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
    // filterName(filters.filterByName.name);
  };

  return (
    <form>
      <label htmlFor="name">
        Nome:
        <input
          id="name"
          name="name"
          value={ filters.filterByName.name }
          data-testid="name-filter"
          onChange={ handleChangeName }
        />
      </label>
    </form>
  );
};

export default Filter;
