import styled from 'styled-components';

export const Para = styled.p`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
    margin-top: 15px;
    margin-left: 5px;
  }

  ul {
    margin-left: auto;
    display: flex;

    li {
      margin-right: 10px;

      a {
        color: #444;
        opacity: 0.8;
      }
    }
  }
`;
