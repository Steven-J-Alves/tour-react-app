import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';

import * as validation from '../../utils/inputsValidations';

import { Container, Content } from './styles';

function SignUp() {
  /* state for name and name errors */
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [hasNameError, setHasNameError] = useState([]);
  /* state for email and email errors */
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [hasEmailError, setHasEmailError] = useState([]);
  /* state for password and password errors */
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [hasPasswordError, setHasPasswordError] = useState([]);
  /* state for confirm password and confirm password errors */
  const [confirmPassword, setconfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [hasConfirmPasswordError, setHasConfirmPasswordError] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    /* validate name schema */
    try {
      await validation.nameSchema.validate(email, {
        abortEarly: false,
      });
    } catch (error) {
      setHasNameError(error.errors[0]);
      setNameError(true);
    }

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

    /* validate confirm password schema */
    try {
      await validation.confirmPasswordSchema.validate(confirmPassword, {
        abortEarly: false,
      });
    } catch (error) {
      setHasConfirmPasswordError(error.errors[0]);
      setConfirmPasswordError(true);
    }
  };

  function handleFocus() {
    setNameError(false);
    setHasNameError([]);
    setEmailError(false);
    setHasEmailError([]);
    setPasswordError(false);
    setHasPasswordError([]);
    setConfirmPasswordError(false);
    setHasConfirmPasswordError([]);
  }

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit} onFocus={handleFocus}>
          <h1>Create your account!</h1>
          <div>
            <Input
              type="text"
              placeholder="your name"
              label="Name"
              name="name"
              value={name}
              error={name.length <= 0}
              onChange={(e) => {
                setName(e.target.value);
                setNameError(false);
              }}
            />
          </div>
          {nameError ? <span>{hasNameError}</span> : ''}
          <div>
            <Input
              type="email"
              placeholder="your@example.com"
              label="Email"
              name="email"
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
            <Input
              type="password"
              placeholder="••••••••"
              label="Confirm Password"
              name="confirm_password"
              value={confirmPassword}
              error={confirmPassword.length < 6}
              onChange={(e) => {
                setconfirmPassword(e.target.value);
                setconfirmPassword(false);
              }}
            />
          </div>
          {confirmPasswordError ? <span>{hasConfirmPasswordError}</span> : ''}
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
