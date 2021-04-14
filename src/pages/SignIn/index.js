import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';

import { Container, Content } from './styles';

function SignIn() {
  return (
    <Container>
      <Content>
        <form>
          <h1>Log into your account</h1>
          <div>
            <Input
              type="email"
              placeholder="your@example"
              name="email"
              label="Email"
              required
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="••••••••"
              label="Password"
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
