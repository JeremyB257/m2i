import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import SuperButton from '../components/Button';
import Square from '../components/Square';

const Exercice2 = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <SuperButton onPress={() => alert('Bonjour')}>Bonjour</SuperButton>
      <SuperButton onPress={() => alert('Au Revoir')}>Au revoir</SuperButton>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text>Vous avez cliqué sur le bouton {count} fois</Text>
        <Button
          title="Cliquer"
          onPress={() => {
            setCount(count + 1);
          }}
        />
        <SuperButton onPress={() => setCount(count + 1)}>Cliquer ({count} fois)</SuperButton>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Square bg="lightcoral">Square 1</Square>
        <Square bg="lightblue">Square 2</Square>
        <Square bg="lightgreen">Square 3</Square>
        <Square>Square 3</Square>
      </View>
    </View>
  );
};

export default Exercice2;
