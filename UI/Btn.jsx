import { Button, Text } from 'react-native';
import styled from 'styled-components/native';

export const Btn = ({ text }) => {
  return (
    <>
      <PrimaryButton
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgba(93, 204, 252, 0.5)' : '#5dccfcc6',
          },
        ]}
      >
        <BtnText>{text}</BtnText>
      </PrimaryButton>
    </>
  );
};

const PrimaryButton = styled.Pressable`
  border-radius: 8px;
  background: #5dccfc;
  padding: 20px;
`;

const BtnText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
`;
