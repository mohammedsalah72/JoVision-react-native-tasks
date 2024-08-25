import React, { useRef } from 'react';
import { View, FlatList, Image, Alert, StyleSheet, Pressable, Button } from 'react-native';

// Sample data with 10 images
const IMAGE_DATA = [
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

const Task29 = () => {
  const flatListRef = useRef(null);

  
  const handleImagePress = (index) => {
    Alert.alert(`You have selected image: ${index + 1}`);
  };

  
  const scrollToIndex = (index) => {
    console.log(`Attempting to scroll to index: ${index}`); 
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ index, animated: true });
    } else {
      console.error('FlatList reference is null'); 
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
            if (!isNaN(index) && index >= 0 && index < IMAGE_DATA.length) {
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

  // Render each image item
  const renderImageItem = ({ item, index }) => (
    <Pressable onPress={() => handleImagePress(index)} style={styles.imageContainer}>
      <Image source={item} style={styles.image} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={IMAGE_DATA}
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
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default Tas29;
