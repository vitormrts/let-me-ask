import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { AdminRoom, Home, NewRoom, Room, Rooms } from 'src/pages';
import { AdminRoutes } from 'src/routes';

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" exact component={NewRoom} />
      <Route path="/rooms/:id" component={Room} />
      <AdminRoutes path="/admin/rooms/:id" component={AdminRoom} />
      <Route path="/rooms" component={Rooms} />
    </Switch>
  </BrowserRouter>
);
export default AppRoutes;
