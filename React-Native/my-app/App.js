import { useState } from 'react';
import {
  StatusBar,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import About from './About';
import styles from './app.style';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={[styles.title, styles.text]}>Le titre</Text>
          <Text style={styles.text}>
            Open up App.js to start working ! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            consequuntur nam nihil hic illo quis dolores, saepe facere illum delectus perferendis non suscipit dolorum
            alias voluptatibus iusto ipsam fugit maxime. Ab ipsa quos provident ad maxime accusamus expedita obcaecati
            ullam cum voluptatum iste eum numquam eius deleniti repellat quam culpa reprehenderit iusto, voluptate eaque
            natus, nemo labore. Debitis, rerum est? Qui, eius voluptatem velit quas aliquid dolores ut assumenda libero
            nam corrupti exercitationem odio quaerat ea rem quos tempore pariatur aut illum earum, officiis neque
            obcaecati! Quas beatae ea qui. Mollitia dignissimos placeat maiores commodi nesciunt dolorem atque tenetur
            quaerat, consequuntur officia delectus at velit perspiciatis neque? Laborum praesentium quidem distinctio
            neque maiores aliquid reiciendis maxime quasi soluta nostrum! Velit? Deserunt harum, atque cum temporibus
            ipsa dicta aspernatur eaque incidunt nisi quidem officia perspiciatis eum dolorum fugit vitae est explicabo
            labore sint repellendus corrupti! Neque fuga illum nemo tenetur eum!
          </Text>
          <Image source={require('./assets/favicon.png')} style={{ width: 100, height: 100 }} />
          <Image
            source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png' }}
            style={{ width: 100, height: 100 }}
          />
          <Button title="bonjour" onPress={() => alert('Salut lequipe')} color="#f194ff" />
          <TouchableHighlight underlayColor="red" style={styles.btn} onPress={() => alert('Mon bouton')}>
            <Text style={{ color: 'white' }}>Mon bouton</Text>
          </TouchableHighlight>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: '#7de1fa',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>Hello World !</Text>
          </View>
        </View>
        <View>
          <Text>Compteur : {count}</Text>
          <TouchableOpacity style={styles.countBtn} onPress={() => setCount(count + 1)}>
            <Text style={{ color: 'white' }}>Count +1</Text>
          </TouchableOpacity>
        </View>
        <About text="la props" />

        <StatusBar backgroundColor="black" barStyle="light-content" animated={true} />
      </ScrollView>
    </SafeAreaView>
  );
}
