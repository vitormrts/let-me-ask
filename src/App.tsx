import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'src/styles/GlobalStyle';
import { AuthContextProvider } from './contexts';
import { useSwitchTheme } from './hooks';
import { AppRoutes as Routes } from './routes';

const App: React.FC = () => {
  const { theme } = useSwitchTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </ThemeProvider>
  );
};

export default App;
