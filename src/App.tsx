import { BrowserRouter, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts';
import { Home, NewRoom } from "./pages";

function App() {
 

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
