import styled from 'styled-components/native';

export const SplashScreen = () => {
  return (
    <SplashView>
      <SplashLogo source={require('../assets/water_drops.png')} />
      <SplashTitle>Drops Water Tracker</SplashTitle>
      <SplashText>Stay hydrated and track your daily water intake</SplashText>
    </SplashView>
  );
};

const SplashView = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
  background: #5dccfc;
  padding: 15px;
`;

const SplashLogo = styled.Image`
  width: 157px;
  height: 171px;
`;

const SplashTitle = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 12px;
`;

const SplashText = styled.Text`
  max-width: 206px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  text-align: center;
  opacity: 0.7;
`;
