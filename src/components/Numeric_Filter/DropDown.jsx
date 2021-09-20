import React from 'react';

const DropDown = () => (
  <div className="dropdown">
    <h2>{ title }</h2>
    <button
      className="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      { nameBtn }
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      { options.map((option, index) => (
        <li key={ option }>
          <button
            id={ index }
            className="dropdown-item"
            type="button"
            value={ option }
            onClick={ onClick }
            name={ title.toLowerCase() }
          >
            { option }
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default DropDown;
