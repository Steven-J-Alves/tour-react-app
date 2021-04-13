import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

function SignUp() {
  return (
    <Container>
      <Content>
        <form>
          <h1>Create your account!</h1>
          <div>
            <label htmlFor="name">Your name</label>
            <input type="text" placeholder="your name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email address</label>
            <input
              type="text"
              placeholder="your@example.com"
              name="email"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              name="password"
              required
            />
          </div>
          <div>
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
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
