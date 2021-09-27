import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();
const ThemeContextProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [light] = useState({
    syntax: '#555',
    ui: '#ddd',
    bg: '#eee',
  });
  const [dark] = useState({
    syntax: '#ddd',
    ui: '#333',
    bg: '#555',
  });

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <ThemeContext.Provider value={ { isLightTheme, light, dark, toggleTheme } }>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeContextProvider;
