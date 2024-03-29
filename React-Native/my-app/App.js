import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Exercice1 from './screens/Exercice1';
import Home from './screens/Home';
import Ionicons from '@expo/vector-icons/Ionicons';
import Exercice2 from './screens/Exercice2';
import { StatusBar } from 'react-native';
import List from './screens/List';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Item from './components/Item';
import Pokemons from './screens/Pokemons';
import PokemonCard from './screens/PokemonCard';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { paddingBottom: 5 },
        //tabBarLabel: 'toto',
        //tabBarLabel: () => null,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',

        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'home';

          if (route.name === 'Exercice 1') {
            iconName = 'planet';
          } else if (route.name === 'Exercice 2') {
            iconName = 'arrow-forward-circle';
          } else if (route.name === 'Liste') {
            iconName = 'list';
          } else if (route.name === 'Pokemons') {
            iconName = 'bug';
          }
          iconName += focused ? '' : '-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Exercice 1" component={Exercice1} />
      <Tab.Screen name="Exercice 2" component={Exercice2} />
      <Tab.Screen name="Liste" component={List} />
      <Tab.Screen name="Pokemons" component={Pokemons} options={{ tabBarBadge: 2 }} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabScreen" component={TabScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Item" component={Item} />
        <Stack.Screen name="Pokemon" component={PokemonCard} />
      </Stack.Navigator>

      <StatusBar style="dark" hidden={false} />
    </NavigationContainer>
  );
}
