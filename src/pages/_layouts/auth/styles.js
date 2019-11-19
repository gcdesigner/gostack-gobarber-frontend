import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: linear-gradient(-90deg, #151414, #1d365a, #151414);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    input {
      background: rgba(0, 0, 0, 0.3);
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

    span {
      align-self: flex-start;
      color: #ff8989;
      margin: 0 0 10px;
    }

    button {
      margin: 5px 0 15px;
      height: 44px;
      background: #3b9eff;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#3b9eff')};
      }
    }

    a {
      color: #fff;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
