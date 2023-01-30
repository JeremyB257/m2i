import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

const PokemonCard = ({ route, navigation }) => {
  let pokemon = route.params.pokemon;
  useFocusEffect(() => {
    navigation.setOptions({ title: pokemon.name });
  });
  return (
    <View style={styles.card}>
      <Text>{pokemon.name}</Text>
    </View>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: { height: 2 },
    elevation: 5,
  },
});
