import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

function SignIn() {
  return (
    <Container>
      <Content>
        <form>
          <h1>Log into your account</h1>
          <div>
            <label htmlFor="email">Email address</label>
            <input
              type="text"
              placeholder="your@example"
              name="email"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              placeholder="••••••••"
              name="password"
              required
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
          <Link to="/signup">Create a account?</Link>
        </form>
      </Content>
    </Container>
  );
}

export default SignIn;
