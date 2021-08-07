import React, { createContext } from 'react';
import { usePersistedState } from 'src/hooks';
import { dark, light } from 'src/styles/theme';
import { DefaultTheme } from 'styled-components';

export type ThemeContextType = {
  theme: DefaultTheme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeContextType);

const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
