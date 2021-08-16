import React from 'react';
import { Route, Switch } from 'react-router';
import { AdminRoom, Home, NewRoom, Room, Rooms } from 'src/pages';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/rooms/new" exact component={NewRoom} />
    <Route path="/rooms/:id" component={Room} />
    <Route path="/admin/rooms/:id" component={AdminRoom} />
    <Route path="/rooms" component={Rooms} />
  </Switch>
);
export default Routes;
