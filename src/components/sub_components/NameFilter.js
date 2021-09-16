import React, { useContext } from 'react';
import AppContext from '../../helpers/AppContext';

import lightSaber from '../../imgs/light-saber.gif';

export default function NameFilter() {
  const {
    sets: { setName },
    filters: { name },
  } = useContext(AppContext);
  return (
    <section className="container_filter_name-FiIn">
      <img width="150px" src={ lightSaber } alt="Light Saber Gif" />
      <h2>May the Force be with you.</h2>
      <label className="label_input_text-FiIn" htmlFor="name-filter">
        Filter Planets:
        <input
          data-testid="name-filter"
          value={ name }
          onChange={ ({ target: { value } }) => setName(value) }
          id="name-filter"
          type="text"
        />
      </label>
    </section>
  );
}
