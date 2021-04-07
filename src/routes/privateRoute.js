import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = true;

  const { path } = rest;

  if (!signed && isPrivate) {
    return <Redirect to="/signin" />;
  }

  if (signed && path === '/signin') {
    return <Redirect to="/" />;
  }

  if (signed && path === '/signup') {
    return <Redirect to="/" />;
  }

  // AuthLayout -> no login; display signin and signup form
  // DefaultLayout -> login display component
  let Layout = signed ? DefaultLayout : AuthLayout;

  if (path === '/' || path === '/tour/:id') {
    Layout = DefaultLayout;
  }

  return (
    <Route
      {...rest}
      // function that receive all props (navigation, route params, history...)
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
