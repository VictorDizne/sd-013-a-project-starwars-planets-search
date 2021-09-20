import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';
import TableInfo from './TableInfo';

function SearchBar() {
  const { planetsAtributes } = useContext(MyContext);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResult, setSearchResult] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const results = planetsAtributes.filter(
      (planet) => planet.name.toLowerCase().includes(searchTerm),
    );
    setSearchResult(results);
  }, [planetsAtributes, searchTerm]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={ searchTerm }
        onChange={ handleChange }
      />
      <ul>
        {!!searchTerm.length && searchResult.map(TableInfo)}
      </ul>
    </div>
  );
}

// Object.entries()
// {chave: valor, chave: valor, chave: valor,}
// => [[chave, valor], [chave, valor], [chave, valor]]
export default SearchBar;
