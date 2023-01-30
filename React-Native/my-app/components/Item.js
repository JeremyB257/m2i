import { View, Text } from 'react-native';

const Item = ({ route }) => {
  return (
    <View>
      <Text style={{ fontSize: 32 }}>item {route.params.number}</Text>
    </View>
  );
};

export default Item;
