import React from 'react';
import routes from './routes';
import { Route, Switch } from 'react-router-dom';

export default function App (superProps = {}) {
  return (
    <div>
      <Switch>
        {routes.map(({ path, exact, component: C, ...rest }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            render={(props) => (
              <C {...props} {...rest} {...superProps} />
            )}
          />
        ))}
      </Switch>
    </div>
  );
}