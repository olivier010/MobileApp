import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Yves 👋</Text>
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0e3bab',
  },
});