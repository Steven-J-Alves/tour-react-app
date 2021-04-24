// global styles
import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,300i,700');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html {
    font-size: 62.5%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;

  }
  body {
    -webkit-font-smoothing: antialiased;
    color: #777;
  }
  body, input, button {
    font: 14px 'Lato', sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;
