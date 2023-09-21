import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { Container } from '../components/Container';
import { OnboardingCarousel } from '../components/Onboarding/OnboardingCarousel';

export const OnboardingScreen = () => {
  return (
    <Container>
      <View>
        <OnboardingCarousel />
      </View>
    </Container>
  );
};
