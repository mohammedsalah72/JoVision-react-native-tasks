import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video';

const Task32 = () => {
  return (
    <View style={styles.container}>
      <Video
        source={require('./Resources/sample-video.mp4')} 
        style={styles.video}
        poster={require('./Resources/image10.jpg')} 
        posterResizeMode="cover" 
        resizeMode="contain" 
        controls 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  video: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.4,
  },
});

export default Task32;
