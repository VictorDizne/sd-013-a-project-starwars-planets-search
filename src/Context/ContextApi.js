import React, { createContext, useState, useEffect } from 'react';

export const ContextApi = createContext();

function ContextProvider () {
  useEffect(() => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    async () => {
      const data = await fetch(url)
      .then((response) => response.json())
      .then(({ results }) => );
    }
    
  })
}
