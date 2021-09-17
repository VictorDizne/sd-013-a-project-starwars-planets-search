import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

const Filter = () => {
  // const [localFilters, setLocalFilters] = useState({
  //   filterByName: {
  //     name: '',
  //   },
  // });

  const { filters, setFilters } = useContext(PlanetContext);

  const handleChangeName = ({ target: { value } }) => {
    // setLocalFilters({
    //   ...localFilters,
    //   filterByName: {
    //     name: value,
    //   },
    // });
    setFilters({
      ...filters,
      filterByName: {
        // name: localFilters.filterByName.name,
        name: value,
      },
    });
  };

  return (
    // <form>
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
    // </form>
  );
};

export default Filter;
