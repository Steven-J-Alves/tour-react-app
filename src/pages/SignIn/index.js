import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';

import { Container, Content } from './styles';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit}>
          <h1>Log into your account</h1>
          <div>
            <Input
              type="email"
              placeholder="your@example"
              name="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="••••••••"
              label="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
