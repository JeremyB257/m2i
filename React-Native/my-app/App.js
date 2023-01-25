import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Exercice1 from './screens/Exercice1';
import Home from './screens/Home';
import Ionicons from '@expo/vector-icons/Ionicons';
import Exercice2 from './screens/Exercice2';
import { StatusBar } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
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
            }
            iconName += focused ? '' : '-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Exercice 1" component={Exercice1} />
        <Tab.Screen name="Exercice 2" component={Exercice2} options={{ tabBarBadge: 2 }} />
      </Tab.Navigator>
      <StatusBar style="dark" hidden={false} />
    </NavigationContainer>
  );
}
