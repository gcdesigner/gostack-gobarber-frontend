import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

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

  button.btn {
    margin: 5px 0 15px;
    height: 44px;
    background: #3b9eff;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#3b9eff')};
    }
  }

  input {
    background: rgba(0, 0, 0, 0.2);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  form {
    input + span {
      display: block;
      text-align: left;
      color: #ff8989;
      margin: 0 0 10px;
    }
  }

`;

export const colors = {
  primary: '#71915c1',
  secondary: 'blue',
};
