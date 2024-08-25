import React, { useState, useRef } from 'react';
import { View, FlatList, Image, Alert, StyleSheet, Pressable, Button } from 'react-native';


const INITIAL_IMAGE_DATA = [
  require('./Resources/image1.jpg'),
  require('./Resources/image2.jpg'),
  require('./Resources/image3.jpg'),
  require('./Resources/image4.jpg'),
  require('./Resources/image5.jpg'),
  require('./Resources/image6.jpg'),
  require('./Resources/image7.jpg'),
  require('./Resources/image8.jpg'),
  require('./Resources/image9.jpg'),
  require('./Resources/image10.jpg'),
];


const DELETE_ICON = require('./Resources/delete_icon.png');

const Task30 = () => {
  const [imageData, setImageData] = useState(INITIAL_IMAGE_DATA);
  const flatListRef = useRef(null);

  
  const handleImagePress = (index) => {
    Alert.alert(`You have selected image: ${index + 1}`);
  };

  
  const scrollToIndex = (index) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ index, animated: true });
    }
  };

  
  const promptForIndex = () => {
    Alert.prompt(
      'Scroll to Image',
      'Enter the index of the image (1-10):',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: (input) => {
            const index = parseInt(input, 10) - 1;
            if (!isNaN(index) && index >= 0 && index < imageData.length) {
              scrollToIndex(index);
            } else {
              Alert.alert('Invalid index', 'Please enter a number between 1 and 10.');
            }
          },
        },
      ],
      'plain-text',
    );
  };

  
  const handleDeleteImage = (index) => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to remove this image?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            setImageData(prevData => prevData.filter((_, i) => i !== index));
          },
        },
      ],
    );
  };

  
  const renderImageItem = ({ item, index }) => (
    <View style={styles.imageContainer}>
      <Pressable onPress={() => handleImagePress(index)} style={styles.imageWrapper}>
        <Image source={item} style={styles.image} />
        <Pressable onPress={() => handleDeleteImage(index)} style={styles.deleteIconContainer}>
          <Image source={DELETE_ICON} style={styles.deleteIcon} />
        </Pressable>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={imageData}
        renderItem={renderImageItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Button title="Scroll to Image" onPress={promptForIndex} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  imageContainer: {
    margin: 5,
    position: 'relative',
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  deleteIconContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 5,
  },
  deleteIcon: {
    width: 20,
    height: 20,
  },
});

export default Task30;
