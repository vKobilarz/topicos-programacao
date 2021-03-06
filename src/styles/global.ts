import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #fafafa;
    color: #202020;
    -webkit-font-smoothing: antialiased;
    height: 100vh;
  }

  div#root {
    height: 100vh;
  }

  body, input, button {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, p, a, button, input {
    font-weight: 700;
    padding: 12px
  }

  button {
    cursor: pointer;
  }
`;
