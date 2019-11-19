import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    user-select: none;
  }

  * :focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a { text-decoration: none; }

  ul { list-style: none; }

  button {
    border: 0;
    padding: 0;
    cursor: pointer;
  }

`;

export const colors = {
  primary: '#71915c1',
  secondary: 'blue',
};
