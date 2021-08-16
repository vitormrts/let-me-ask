import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'src/styles/GlobalStyle';
import { AuthContextProvider } from './contexts';
import { useSwitchTheme } from './hooks';
import Routes from './routes';

const App: React.FC = () => {
  const { theme } = useSwitchTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
