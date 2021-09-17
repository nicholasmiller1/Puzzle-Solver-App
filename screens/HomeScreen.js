import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Puzzle Solver</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Camera')}>
                <Text style={styles.buttonText}>Start Solving!</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
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