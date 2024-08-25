import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Task17 = () => {
  
  const [isVisible, setIsVisible] = useState(false);
  
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      {isVisible && <Text style={styles.nameText}>Mohammed</Text>}
      <Button
        title={isVisible ? 'Hide' : 'Show'}
        onPress={toggleVisibility}
      />
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
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Task17;
