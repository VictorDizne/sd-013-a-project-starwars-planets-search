import React, { useEffect, useState } from 'react';
import htmlID from '../util';


function Table({ results }) {


  function generateColumns(columns) {
    return (
      <tr>
        {columns.map((column) => (
          <th name={ column } key={ htmlID({ name: column }) }>{column}</th>
        ))}
      </tr>);
  }

  function generateRows(planets) {
    planets.map((planet) => {
      const { id, value, description, currency, method, tag, exchangeRates } = expense;
      const planetRow = (
        <tr key={ htmlID({ name: id }) }>
          <td key={ htmlID({ name: description }) }>{ description }</td>
          <td key={ htmlID({ name: tag }) }>{ tag }</td>
          <td key={ htmlID({ name: method }) }>{ method }</td>
          <td key={ htmlID({ name: value }) }>{ value }</td>
          <td key={ htmlID({ name: currencyNames[0] }) }>{ currencyNames[0] }</td>
          <td key={ htmlID({ name: ask }) }>{ Number(ask).toFixed(2) }</td>
          <td key={ htmlID({ name: ask + value }) }>{ ask * value }</td>
          <td key={ htmlID({ name: 'Real' }) }>Real</td>
          <td key={ htmlID({ name: 'button' }) }></td>
        </tr>)
      return planetRow;
    })
  }
  return()

}