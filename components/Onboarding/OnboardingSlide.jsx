import {
  useWindowDimensions,
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import styled from 'styled-components/native';

export const OnboardingSlide = ({ img, title, text }) => {
  const { height, width } = useWindowDimensions();

  return (
    <View style={{ ...styles.container, width: width - 50 }}>
      <Image source={img} resizeMode="contain" style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    // flex: 0.6,
    // width: '100%',
  },
  content: {
    // flex: 0.4,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 25,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#625D5D',
    textAlign: 'center',
    marginBottom: 25,
  },
});
