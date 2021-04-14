import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';

import { Container, Content } from './styles';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit}>
          <h1>Create your account!</h1>
          <div>
            <Input
              type="text"
              placeholder="your name"
              label="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="your@example.com"
              label="Email"
              name="email"
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
            <Input
              type="password"
              placeholder="••••••••"
              label="Confirm Password"
              name="confirm_password"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
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
