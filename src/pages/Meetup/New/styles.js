import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    input,
    textarea {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
        font-size: 16px;
      }
    }

    textarea {
      padding: 15px;
      resize: none;
      height: 200px;
    }

    button {
      display: flex;
      align-self: flex-end;
      padding: 0 15px;
      margin: 5px 0 0;
      height: 44px;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      align-items: center;

      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }

      svg {
        margin-right: 5px;
      }
    }
  }
`;

export const SelectImage = styled.div`
  width: 940px;
  height: 300px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  strong {
    font-size: 20px;
  }
`;
