import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { View, Text } from 'react-native';

const Item = ({ route, navigation }) => {
  useFocusEffect(() => {
    navigation.setOptions({ title: `Item ${route.params.number}` });
  });

  return (
    <View>
      <Text style={{ fontSize: 32 }}>item {route.params.number}</Text>
    </View>
  );
};

export default Item;
