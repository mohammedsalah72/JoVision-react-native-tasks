import React, { useState } from 'react';
import { View, Text, Image, Button, Alert, StyleSheet } from 'react-native';

const Task27 = () => {
  const [selectedImage, setSelectedImage] = useState(require('./Resources/image1.jpg'));

  const showImagePickerAlert = () => {
    Alert.alert(
      'Choose an Image',
      'click to numper image to show',
      [
        { text: '1', onPress: () => setSelectedImage(require('./Resources/image1.jpg')) },
        { text: '2', onPress: () => setSelectedImage(require('./Resources/image2.jpg')) },
        { text: '3', onPress: () => setSelectedImage(require('./Resources/image3.jpg')) },
        { text: 'Cancel', style: 'cancel' },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Image source={selectedImage} style={styles.image} />
      <Button title="Choose Image" onPress={showImagePickerAlert} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});

export default Task27;
