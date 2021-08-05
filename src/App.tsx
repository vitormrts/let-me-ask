import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import vanilla from 'src/styles/vanilla';
import GlobalStyle from 'src/styles/GlobalStyle';
import { AuthContextProvider } from './contexts';
import { AdminRoom, Home, NewRoom, Room } from './pages';

const App: React.FC = () => (
  <ThemeProvider theme={vanilla}>
    <GlobalStyle />
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" exact component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
