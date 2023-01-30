import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import { useCallback, useState } from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const Pokemons = ({ navigation }) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  let [gen, setGen] = useState(1);

  useFocusEffect(
    useCallback(() => {
      axios
        .get('https://pokebuildapi.fr/api/v1/pokemon/limit/151')
        .then((res) => setPokemons(res.data))
        .catch((err) => console.log(err));
    }, [])
  );

  const ItemView = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Pokemon', { pokemon: item })}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
          <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
          <Text style={{ fontSize: 30 }}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const Header = () => {
    return loading && <Text style={{ fontSize: 24 }}>Chargement génération {gen} ...</Text>;
  };

  const FetchPokemons = () => {
    setLoading(true);
    let generation = Math.ceil(Math.random() * 8);
    setGen(generation);
    axios
      .get('https://pokebuildapi.fr/api/v1/pokemon/generation/' + generation)
      .then((res) => {
        setPokemons(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <FlatList
      data={pokemons}
      renderItem={ItemView}
      ListHeaderComponent={Header}
      refreshing={loading}
      onRefresh={() => FetchPokemons()}
    />
  );
};

export default Pokemons;
