import styled from 'styled-components';

export const Container = styled.div`
  background: #444;
`;

export const Content = styled.div`
  padding: 30px;

  header {
    height: 5px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      height: 3.5rem;
    }

    a:nth-child(1) {
      text-decoration: none;
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
      margin-right: 10px;
      margin-left: 10px;
      border-radius: 50%;
      height: 50px;
      border: 1px solid #f7f7f7;
      width: 50px;
    }
  }

  svg {
    margin-right: 10px;
    margin-left: 28px;
    height: 2rem;
    width: 2rem;
    fill: #f7f7f7;
  }

  button {
    padding: 1rem 3rem;
    border-radius: 10rem;
    border: 1px solid currentColor !important;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    text-transform: uppercase;
    color: #f7f7f7;
    font-size: 1.6rem;
    text-decoration: none;
    transition: all 0.2s;
    font-weight: 400;
    display: inline-flex;
    align-items: center;
    background: none;
    cursor: pointer;
    font-family: inherit;

    a:hover {
      color: #444;
    }
  }

  button:focus {
    outline: none;
  }

  button:hover {
    background-color: #f7f7f7;
    text-shadow: none;
    border-color: #f7f7f7;
  }

  button:not(:last-child) {
    margin-right: 1rem;
    border: none;
    color: #444;
    background-color: #444;
    border-color: #444;

    a:hover {
      color: #fff;
      -webkit-transform: translateY(-2px);
      transform: translateY(-2px);
      -webkit-transform: translateY(-2px);
      transform: translateY(-2px);
      -webkit-transition: all 0.3s;
      text-shadow: 0 0.7rem 1rem black;
    }
  }
`;
