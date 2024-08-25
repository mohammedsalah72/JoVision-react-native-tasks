import React from 'react';
import { View, FlatList, Image, Alert, StyleSheet, Pressable } from 'react-native';

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

const Task28 = () => {
  
  const handleImagePress = (index) => {
    Alert.alert(`You have selected image: ${index + 1}`);
  };

  
  const renderImageItem = ({ item, index }) => (
    <Pressable onPress={() => handleImagePress(index)} style={styles.imageContainer}>
      <Image source={item} style={styles.image} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={IMAGE_DATA}
        renderItem={renderImageItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
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

export default Task28;
