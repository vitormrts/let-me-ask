import React, { createContext } from 'react';
import { usePersistedState } from 'src/hooks';
import { dark, light } from 'src/styles/theme';
import { DefaultTheme } from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export type ThemeContextType = {
  theme: DefaultTheme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeContextType);

const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
    toast.success(`The theme was changed`);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
