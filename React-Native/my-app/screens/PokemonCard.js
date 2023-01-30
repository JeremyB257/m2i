import { useFocusEffect } from '@react-navigation/native';
import { Image, StyleSheet, Text, View } from 'react-native';

const PokemonCard = ({ route, navigation }) => {
  let pokemon = route.params.pokemon;
  useFocusEffect(() => {
    navigation.setOptions({ title: pokemon.name });
  });
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {pokemon.name}({pokemon.id})
      </Text>
      <Image source={{ uri: pokemon.image }} style={{ width: 250, height: 250 }} />

      {/* stats */}
      <View style={{ borderWidth: 1, borderColor: 'lightgrey', padding: 20 }}>
        <Text style={[styles.stats, { color: pokemon.stats.HP > 70 ? 'green' : 'red' }]}>
          - Hp : {pokemon.stats.HP}
        </Text>
        <Text style={styles.stats}>- Attaque : {pokemon.stats.attack}</Text>
        <Text style={styles.stats}>- Defense : {pokemon.stats.defense}</Text>
      </View>

      {/* type */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {pokemon.apiTypes.map((type, index) => (
          <>
            <Text key={index}>{type.name}</Text>
            <Image source={{ uri: type.image }} style={{ width: 20, height: 20 }} />
          </>
        ))}
      </View>

      {/* evolution */}
      <View></View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  stats: {
    fontSize: 24,
  },
});
