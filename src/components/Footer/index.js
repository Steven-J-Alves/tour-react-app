import React from 'react';

import { Container, Content, Para } from './styles';

import logo from '../../assets/logo-green.png';

function Footer() {
  return (
    <Container>
      <Content>
        <div>
          <img src={logo} alt="Natours logo" />
        </div>
        <ul>
          <li>
            <a href="/">About us</a>
          </li>
          <li>
            <a href="/">Download apps</a>
          </li>
          <li>
            <a href="/">Become a guide</a>
          </li>
          <li>
            <a href="/">Careers</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </Content>
      <Para>&copy; by Steven Alves. All rights reserved.</Para>
    </Container>
  );
}

export default Footer;
