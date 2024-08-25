import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const MyFunctionPage = ({ onTextChange }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Type something..."
        onChangeText={(text) => onTextChange(text)} 
      />
    </View>
  );
};


const Task22 = () => {
  const [parentText, setParentText] = useState('');
  const [showMyFunctionPage, setShowMyFunctionPage] = useState(false);

  return (
    <View style={styles.container}>
      
      <Text style={styles.parentText}>{parentText}</Text>

      
      <Button
        title={showMyFunctionPage ? 'Hide' : 'Show'}
        onPress={() => setShowMyFunctionPage(!showMyFunctionPage)}
      />

      
      {showMyFunctionPage && (
        <MyFunctionPage onTextChange={setParentText} />
      )}
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
  parentText: {
    fontSize: 30,
    marginBottom: 20,
    color: 'black',
  },
  inputContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    width: '100%',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default Task22;
