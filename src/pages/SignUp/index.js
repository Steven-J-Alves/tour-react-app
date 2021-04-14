import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';

import { Container, Content } from './styles';

function SignUp() {
  return (
    <Container>
      <Content>
        <form>
          <h1>Create your account!</h1>
          <div>
            <Input
              type="text"
              placeholder="your name"
              label="Name"
              name="name"
              required
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="your@example.com"
              label="Email"
              name="email"
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
            <Input
              type="password"
              placeholder="••••••••"
              label="Confirm Password"
              name="confirm_password"
              required
            />
          </div>
          <div>
            <button type="submit">SIGN UP</button>
          </div>
          <Link to="/signin">Have a account?</Link>
        </form>
      </Content>
    </Container>
  );
}

export default SignUp;
