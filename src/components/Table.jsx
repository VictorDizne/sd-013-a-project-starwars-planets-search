import React from 'react';

const Table = () => {
  fetch('https://swapi-trybe.herokuapp.com/api/planets/?format=json')
    .then((response) => response.json())
    .then((data) => console.log(data));

  return <table />;
};

export default Table;
