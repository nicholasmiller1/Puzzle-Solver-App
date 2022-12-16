import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function PuzzleScreen({ route, navigation }) {
  const [puzzlePhoto, setPuzzlePhoto] = useState(route.params.photo);

  return (
    <View style={styles.container}>
      <Image
        source={{uri: puzzlePhoto && puzzlePhoto.uri}}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  }
});