import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';


function generateRandomWord(length) {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}


const words = Array.from({ length: 100 }, () => generateRandomWord(6)); 

const Task36 = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {words.map((word, index) => (
          <Text key={index} style={styles.text}>
            {word}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default Task36;
