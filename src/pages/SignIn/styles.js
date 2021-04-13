import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(-90deg, #29bb89, #1592aa);
  padding: 8rem 6rem;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 55rem;
  background-color: #fff;
  -webkit-box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);
  box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);
  padding: 5rem 7rem;
  border-radius: 0.32rem;

  form {
    display: flex;
    flex-direction: column;

    div {
      margin-bottom: 2rem !important;
    }

    div:nth-child(3) {
      margin-bottom: 3rem !important;
    }

    input {
      display: block;
      font-family: inherit;
      font-size: 1.5rem;
      color: inherit;
      padding: 1.25rem 1.75rem;
      border: none;
      width: 100%;
      background-color: #fff;
      background-color: #f2f2f2;
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
      border-radius: 4px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }

    h1 {
      font-size: 2.25rem;
      text-transform: uppercase;
      font-weight: 700;
      background-image: -webkit-gradient(
        linear,
        left top,
        right top,
        from(#7dd56f),
        to(#28b487)
      );
      background-image: linear-gradient(to right, #7dd56f, #28b487);
      -webkit-background-clip: text;
      color: transparent;
      letter-spacing: 0.1rem;
      line-height: 1.3;
      display: inline-block;
      margin-bottom: 3.5rem !important;
    }

    input:focus {
      outline: none;
      border-bottom: 3px solid #55c57a;
    }

    input:focus:invalid {
      border-bottom: 3px solid #ff7730;
    }
    input::-webkit-input-placeholder {
      color: #bbb;
    }

    label {
      display: block;
      font-size: 1.6rem;
      font-weight: 700;
      margin-bottom: 0.75rem;
    }

    button {
      font-size: 1.6rem;
      padding: 1.4rem 3rem;
      border-radius: 10rem;
      text-transform: uppercase;
      display: inline-block;
      text-decoration: none;
      position: relative;
      -webkit-transition: all 0.4s;
      transition: all 0.4s;
      font-weight: 400;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      border: none;
      cursor: pointer;
      background-color: #55c57a;
      color: #fff;
    }

    button:hover {
      -webkit-transform: translateY(-3px);
      transform: translateY(-3px);
      -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    }

    a {
      font-size: 1.4rem;
      margin-top: 0.2rem;
    }
  }
`;
