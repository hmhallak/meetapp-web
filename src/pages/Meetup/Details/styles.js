import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    strong {
      font-size: 32px;
      color: #fff;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;

      a,
      button {
        display: flex;
        padding: 0 15px;
        height: 35px;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;
        align-items: center;

        svg {
          margin-right: 5px;
        }
      }

      a {
        background: #4dbaf9;
        margin-right: 20px;

        &:hover {
          background: ${darken(0.05, '#4dbaf9')};
        }
      }

      button {
        background: #d44059;

        &:hover {
          background: ${darken(0.05, '#D44059')};
        }
      }
    }
  }
`;

export const Meetup = styled.div`
  margin-top: 50px;

  img {
    width: 940px;
    max-height: 300px;
    border-radius: 10px;
  }

  p {
    font-size: 14px;
    line-height: 1.8;
    color: #fff;
    margin: 30px 0;
    text-align: justify;
  }

  footer {
    display: flex;

    span {
      display: flex;
      align-items: center;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.6);
      margin-right: 20px;

      svg {
        margin-right: 10px;
      }
    }
  }
`;
