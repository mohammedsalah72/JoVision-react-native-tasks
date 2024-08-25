import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import useCurrentTime from './hooks/useCurrentTime';

const Task34 = () => {
  const [isTimeVisible, setIsTimeVisible] = useState(true);
  const currentTime = useCurrentTime();

  const toggleTimeVisibility = () => {
    setIsTimeVisible(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <Button title={isTimeVisible ? "Hide Time" : "Show Time"} onPress={toggleTimeVisibility} />
      {isTimeVisible && (
        <View>
          <Text style={styles.text}>Current Date: {currentTime.toDateString()}</Text>
          <Text style={styles.text}>Current Time: {currentTime.toLocaleTimeString()}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  text: {
    fontSize: 20,
    margin: 10,
  },
});

export default Task34;
