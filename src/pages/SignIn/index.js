import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';

import * as validation from '../../utils/inputsValidations';

import { Container, Content } from './styles';

function SignIn() {
  /* state for email and email errors */
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [hasEmailError, setHasEmailError] = useState([]);
  /* state for password and password errors */
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [hasPasswordError, setHasPasswordError] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    /* validate email schema */
    try {
      await validation.emailSchema.validate(email ? email.trim() : email, {
        abortEarly: false,
      });
    } catch (error) {
      setHasEmailError(error.errors[0]);
      setEmailError(true);
    }

    /* validate password schema */
    try {
      await validation.passwordSchema.validate(password, {
        abortEarly: false,
      });
    } catch (error) {
      setHasPasswordError(error.errors[0]);
      setPasswordError(true);
    }
  };

  function handleFocus() {
    setEmailError(false);
    setHasEmailError([]);
    setPasswordError(false);
    setHasPasswordError([]);
  }

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit} onFocus={handleFocus}>
          <h1>Log into your account</h1>
          <div>
            <Input
              type="email"
              placeholder="your@example"
              name="email"
              label="Email"
              value={email}
              error={email.length <= 0}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(false);
              }}
            />
          </div>
          {emailError ? <span>{hasEmailError}</span> : ''}
          <div>
            <Input
              type="password"
              placeholder="••••••••"
              label="Password"
              name="password"
              value={password}
              error={password.length < 6}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(false);
              }}
            />
          </div>
          {passwordError ? <span>{hasPasswordError}</span> : ''}
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
