import { View, StyleSheet } from 'react-native';

export const Pagination = ({ data, index }) => {
  return (
    <View style={styles.container}>
      {data.map((_, idx) => {
        return (
          <View
            key={idx}
            style={[styles.dot, idx === index && styles.dotActive]}
          ></View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 50,
  },
  dot: {
    width: 23,
    height: 6,
    borderRadius: 50,
    backgroundColor: '#F2F2F2',
  },
  dotActive: {
    backgroundColor: '#5DCCFC',
  },
});
