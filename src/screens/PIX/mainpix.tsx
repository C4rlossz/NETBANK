import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Deseja fazer um pix?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});

export default DetailsScreen;
