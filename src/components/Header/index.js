import React from 'react';
// import { Link } from 'react-router-dom';

import logo from '../../assets/logo-white.png';
import user from '../../assets/user-2.jpg';
import icon_search from '../../assets/icons.svg';

import { Container, Content } from './styles';

function Header() {
  const login = false;

  function isLogin() {
    return (
      <>
        <a href="/">MY BOOKINGS</a>
        <a href="/">
          <img src={user} alt="User" />
        </a>
        <span>JONAS</span>
        <button type="button">LOG OUT</button>
      </>
    );
  }
  return (
    <Container>
      <Content>
        <header>
          <nav>
            <a href="/">ALL TOURS</a>
            <form>
              <svg>
                <use xlinkHref={`${icon_search}#icon-search`} />
              </svg>
              <input type="text" placeholder="Search tours" />
            </form>
          </nav>
          <img src={logo} alt="Natours logo" />
          <nav>
            {login ? (
              isLogin()
            ) : (
              <>
                <button type="button">Sign In</button>
                <button type="button">Sign up</button>
              </>
            )}
          </nav>
        </header>
      </Content>
    </Container>
  );
}

export default Header;
