import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { store } from '../../store';

import { signOut } from '../../store/modules/auth/actions';

// import { Link } from 'react-router-dom';

import logo from '../../assets/logo-white.png';
import icon_search from '../../assets/icons.svg';

import { Container, Content } from './styles';

function Header() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  let API_URL_FILES = '';
  if (profile) {
    API_URL_FILES = `${process.env.REACT_APP_API_URL_FILES}img/users/${profile.photo}`;
  }

  const { signed } = store.getState().auth;

  function HandleSignOut() {
    dispatch(signOut());
  }

  function isLogin() {
    return (
      <>
        <a href="/">MY BOOKINGS</a>
        <a href="/">
          <img src={API_URL_FILES} alt={profile.name} />
        </a>
        <span>{profile.name}</span>
        <button type="button" onClick={HandleSignOut}>
          <a href="/signin">LOG OUT</a>
        </button>
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
            {signed ? (
              isLogin()
            ) : (
              <>
                <button type="button">
                  <a href="/signin">Sign In</a>
                </button>
                <button type="button">
                  <a href="/signup">Sign up</a>
                </button>
              </>
            )}
          </nav>
        </header>
      </Content>
    </Container>
  );
}

export default Header;
