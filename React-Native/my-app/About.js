import styles from './app.style';

import { ActivityIndicator, Image, Text, View } from 'react-native';

const About = (props) => {
  return (
    <View>
      <Text>Le titre</Text>
      <Text>La description</Text>
      <Text>La description 2</Text>
      <Text>La description 3</Text>
      <Text>{props.text}</Text>

      <Image source={require('./assets/favicon.png')} />
      <ActivityIndicator size="small" color="#0000ff" />
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
};

export default About;
