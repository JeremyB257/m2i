import { StyleSheet, Text } from 'react-native';
import { View } from 'react-native';

const Square = ({ children, bg }) => {
  return (
    <View style={[styles.square, { backgroundColor: bg || 'red' }]}>
      <Text>{children}</Text>
    </View>
  );
};

export default Square;

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
