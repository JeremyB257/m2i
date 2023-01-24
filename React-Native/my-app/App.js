import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import styles from './style';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={[styles.title, styles.text]}>Le titre</Text>
          <Text style={styles.text}>Open up App.js to start working !</Text>
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
        {/*  <StatusBar style="auto" /> */}
      </ScrollView>
    </SafeAreaView>
  );
}
