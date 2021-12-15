import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function CameraPreview({photo, onRetake, onSelect}) {
  return (
    <View style={styles.previewContainer}>
      <Image
        source={{uri: photo && photo.uri}}
        style={styles.previewImage}
      />
      <TouchableOpacity style={styles.retakeButton} onPress={onRetake}>
        <Text style={styles.buttonText}>Retake</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.selectButton} onPress={onSelect}>
        <Text style={styles.buttonText}>Select</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  previewContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  previewImage: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  retakeButton: {
    position: 'absolute',
    bottom: 30,
    left: 40,
  },
  selectButton: {
    position: 'absolute',
    bottom: 30,
    right: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  }
});