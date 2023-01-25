import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import SuperButton from '../components/Button';

import styles from '../style';
import About from './About';

const Exercice1 = () => {
  let [count, setCount] = useState(0);

  useFocusEffect(
    useCallback(() => {
      console.log('Mount');

      return () => {
        console.log('UnMount');
        setCount(0);
      };
    }, [])
  );

  return (
    <SafeAreaView>
      <View style={[styles.square, { backgroundColor: '#7de1fa', justifyContent: 'center', alignItems: 'center' }]}>
        <Text>Hello, world!</Text>
      </View>

      <SuperButton onPress={() => setCount(count + 1)}>Incrémenter {count}</SuperButton>
      <SuperButton onPress={() => console.log('SALUT')}>Salut</SuperButton>

      <About />

      <StatusBar style="dark" hidden={false} />
    </SafeAreaView>
  );
};

export default Exercice1;
