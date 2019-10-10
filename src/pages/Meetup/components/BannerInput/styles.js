import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 30px;
  border-radius: 10px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    img {
      height: 300px;
      width: 940px;
      border-radius: 10px;
    }

    input {
      display: none;
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
