import styled from 'styled-components';

export const Container = styled.div`
  background: #444;
`;

export const Content = styled.div`
  padding: 30px;

  header {
    height: 20px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      height: 3.5rem;
    }

    a {
      text-decoration: none;
      margin-right: 25px;
      color: white;
    }

    input {
      font-family: inherit;
      font-weight: inherit;
      text-transform: uppercase;
      background: none;
      border: none;
      font-size: 1.5rem;
      color: #f7f7f7;
      padding-bottom: 3px;
      border-bottom: 1px solid #999;
      width: 18rem;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
    }

    span {
      margin-right: 15px;
      color: white;
    }
  }

  nav:nth-child(1) {
    display: flex;
    align-items: center;

    form {
      display: flex;
      align-items: center;
    }
  }

  nav:nth-child(3) {
    display: flex;
    align-items: center;

    img {
      border-radius: 50%;
      height: 50px;
      width: 50px;
    }
  }

  svg {
    margin-right: 10px;
    height: 2rem;
    width: 2rem;
    fill: #f7f7f7;
  }

  button:nth-child(1) {
    padding: 1rem 3rem;
    -webkit-transition: all 0.3s;
    border-radius: 10rem;
    transition: all 0.3s;
    color: #f7f7f7;
    text-transform: uppercase;
    font-size: 1.6rem;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    transition: all 0.2s;
    font-weight: 400;
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  button:nth-child(2) {
    padding: 1rem 3rem;
    border-radius: 10rem;
    border: 1px solid currentColor !important;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    color: #f7f7f7;
    text-transform: uppercase;
    font-size: 1.6rem;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    transition: all 0.2s;
    font-weight: 400;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  button:focus {
    outline: none;
  }

  button:hover {
    background-color: #f7f7f7;
    color: #777;
    text-shadow: none;
    border-color: #f7f7f7;
  }

  button:not(:last-child) {
    margin-right: 1rem;
  }
`;
