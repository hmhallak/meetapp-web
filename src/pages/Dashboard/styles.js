import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 32px;
      color: #fff;
    }

    button {
      display: flex;
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

  ul {
    margin-top: 50px;
  }
`;

export const Meetup = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  border-radius: 6px;
  margin: 10px 0;

  strong {
    font-size: 16px;
  }

  a {
    display: flex;
    color: #fff;
    align-items: center;

    span {
      opacity: 0.6;
      margin-right: 15px;
    }
  }
`;
