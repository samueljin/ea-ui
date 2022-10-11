import React from 'react';
import { Route } from 'react-router-dom';

function PrivateRoute({ component: Component, roles, ...rest }) {
    return (
        <Route {...rest} render={props => {
            return <Component {...props} />
        }} />
    );
}

export { PrivateRoute };