import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Click Me</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#1eb721',
    borderRadius: 6,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});