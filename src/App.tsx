import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthContextProvider } from './contexts';
import { AdminRoom, Home, NewRoom, Room } from "./pages";

const App = () => (
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
);


export default App;
