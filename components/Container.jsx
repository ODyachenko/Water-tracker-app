import { View } from 'react-native';
import styled from 'styled-components/native';

export const Container = ({ children }) => {
  return <ContainerView>{children}</ContainerView>;
};

const ContainerView = styled.View`
  height: 100%;
  background: #fff;
  padding: 25px;
`;
