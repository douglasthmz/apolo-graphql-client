import React from 'react';
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';

import { useNick } from '../hooks/nickName';

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { nick } = useNick();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!nick ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/chat',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
