import styled from 'styled-components';

import backgroundImg from '../../assets/background.jpg';

export const Container = styled.div`
  background-image: url(${backgroundImg});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: left top;

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  border-radius: 8px;
  border: 3px solid gray;
  background-color: rgba(240, 240, 240, 0.95);

  max-width: 1120px;
  width: 100%;
  max-height: 10%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #435049;
  font-size: 38px;
`;

export const Content = styled.div`
  border-radius: 8px;
  border: 3px solid gray;
  background-color: rgba(240, 240, 240, 0.95);

  padding: 16px;
  margin: 32px;

  max-width: 1120px;
  width: 100%;
  max-height: 80%;
  height: 100%;
  overflow: auto;
`;
