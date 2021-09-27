import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

function ThemeToggle() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <button type="button" onClick={ toggleTheme }>Table Theme</button>
  );
}

export default ThemeToggle;
