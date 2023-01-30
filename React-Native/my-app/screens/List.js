import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

const List = ({ navigation }) => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <ScrollView>
      {items.map((item, index) => (
        <View style={styles.item} key={index}>
          <Text>
            <Button title={item + ''} onPress={() => navigation.navigate('Item', { number: item })}></Button>
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default List;

const styles = StyleSheet.create({
  item: {
    height: 100,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
