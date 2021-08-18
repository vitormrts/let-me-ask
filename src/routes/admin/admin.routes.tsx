import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { useAuth } from 'src/hooks';

const AdminRoutes: React.FC<RouteProps> = ({ component, ...routeProps }) => {
  const { user } = useAuth();
  const Component = component as React.ElementType;

  return (
    <Route
      {...routeProps}
      render={props =>
        user ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default AdminRoutes;
