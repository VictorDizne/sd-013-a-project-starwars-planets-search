import React, { useContext } from 'react';
import StarWarsContext from './StarWarsContext';

const Loading = () => {
  const { isFetching } = useContext(StarWarsContext);
  return (
    isFetching && <h1>Loading data, please wait...</h1>
  );
};

export default Loading;
