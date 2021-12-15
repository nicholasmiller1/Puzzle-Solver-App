import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import FullCamera from '../components/FullCamera';

export default function HomeScreen({ navigation }) {
  const [cameraOpen, setCameraOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.home}>
        <Text style={styles.text}>Puzzle Solver</Text>
        <Pressable style={styles.button} onPress={() => setCameraOpen(true)}>
          <Text style={styles.buttonText}>Start Solving!</Text>
        </Pressable>
      </View>
      <FullCamera
        isOpen={cameraOpen}
        onClose={() => setCameraOpen(!cameraOpen)}
        onSelect={() => console.log('photo selected')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  home: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    paddingVertical: '70%'
  },
  text: {
    fontSize: 34,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});