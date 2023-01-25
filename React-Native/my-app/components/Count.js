import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

const Count = () => {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  useEffect(() => {
    console.log('Mout button');

    let timer = setInterval(() => {
      setCount((prevCount) => prevCount + increment);
    }, 500);
    return () => {
      clearInterval(timer);

      console.log('Unmout button');
    };
  }, [increment]);

  return (
    <View>
      <Button title="Incremente +1" onPress={() => setIncrement(increment + 1)} />
      <Text>
        Compteur : {count} (+{increment})
      </Text>
    </View>
  );
};

export default Count;
