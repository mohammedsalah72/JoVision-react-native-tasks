import React, { useState, useRef } from 'react';
import { View, FlatList, Image, Alert, StyleSheet, Pressable, Button } from 'react-native';


const INITIAL_IMAGE_DATA = [
  { id: 1, source: require('./Resources/image1.jpg') },
  { id: 2, source: require('./Resources/image2.jpg') },
  { id: 3, source: require('./Resources/image3.jpg') },
  { id: 4, source: require('./Resources/image4.jpg') },
  { id: 5, source: require('./Resources/image5.jpg') },
  { id: 6, source: require('./Resources/image6.jpg') },
  { id: 7, source: require('./Resources/image7.jpg') },
  { id: 8, source: require('./Resources/image8.jpg') },
  { id: 9, source: require('./Resources/image9.jpg') },
  { id: 10, source: require('./Resources/image10.jpg') },
];


const DELETE_ICON = require('./Resources/delete_icon.png');
const DUPLICATE_ICON = require('./Resources/duplicate_icon.png');

const Task31 = () => {
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

  
  const handleDuplicateImage = (index) => {
    const newImage = { ...imageData[index], id: imageData.length + 1 };
    const updatedImageData = [...imageData];
    updatedImageData.splice(index + 1, 0, newImage); 
    setImageData(updatedImageData);
  };

  
  const renderImageItem = ({ item, index }) => (
    <View style={styles.imageContainer}>
      <Pressable onPress={() => handleImagePress(index)} style={styles.imageWrapper}>
        <Image source={item.source} style={styles.image} />
        <Pressable onPress={() => handleDeleteImage(index)} style={styles.deleteIconContainer}>
          <Image source={DELETE_ICON} style={styles.icon} />
        </Pressable>
        <Pressable onPress={() => handleDuplicateImage(index)} style={styles.duplicateIconContainer}>
          <Image source={DUPLICATE_ICON} style={styles.icon} />
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
        keyExtractor={(item) => item.id.toString()} 
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
  duplicateIconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default Task31;
