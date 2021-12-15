import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { Camera } from 'expo-camera';
import CameraPreview from './CameraPreview';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function FullCamera({isOpen, onClose, onSelect}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = useRef(null);
  const type = Camera.Constants.Type.back;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }, []);

  if (hasPermission === null) {
    return <View />
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  const takePicture = async () => {
    try {
      if (cameraRef.current) {
        let photo = await cameraRef.current.takePictureAsync();
        setCapturedImage(photo);
      }
    } catch(err) {
      console.error(err);
    }
  }

  const onRetake = () => {
    setCapturedImage(null);
  }

  return (
    <Modal visible={isOpen} animationType='slide' transparent>
      <View style={styles.container}>
        {capturedImage ? (
          <CameraPreview
            photo={capturedImage}
            onRetake={onRetake}
            onSelect={onSelect}
          />
        ) : (
          <Camera
            style={styles.camera}
            type={type}
            ref={cameraRef}
          >
            <View style={styles.backButtonContainer}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={onClose}
              >
                <FontAwesomeIcon icon={faTimes} size={24} style={{color: 'white'}}/>
              </TouchableOpacity>
            </View>
            <View style={styles.captureButtonContainer}>
              <TouchableOpacity onPress={takePicture} style={styles.captureButton}/>
            </View>
          </Camera>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  backButtonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 50,
  },
  backButton: {
    flex: 0.1,
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  captureButtonContainer: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  captureButton: {
    backgroundColor: 'white',
    width: 70,
    height: 70,
    borderRadius: 50,
  },
});