import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    hr {
      border: 0;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.3);
      margin: 10px 0 20px;
    }

    span {
      align-self: flex-start;
      color: #ff8989;
      margin: 0 0 10px;
    }
  }

  > button {
    display: block;
    width: 100%;
    margin: 5px 0 15px;
    height: 44px;
    background: #f64c75;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#f64c75')};
    }
  }
`;
