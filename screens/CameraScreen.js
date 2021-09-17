import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function CameraScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is the camera screen</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Go Back</Text>
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