import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const MyFunctionPage = forwardRef((props, ref) => {
  const [childText, setChildText] = useState('');

  
  useImperativeHandle(ref, () => ({
    updateText(newText) {
      setChildText(newText); 
    }
  }));

  return (
    <View style={styles.childContainer}>
      <Text style={styles.childText}>{childText}</Text>
    </View>
  );
});


const Task24 = () => {
  const [parentText, setParentText] = useState('');
  const myFunctionPageRef = useRef(null);

  
  const handleInputChange = (text) => {
    setParentText(text);
    if (myFunctionPageRef.current) {
      myFunctionPageRef.current.updateText(text); 
    }
  };

  return (
    <View style={styles.container}>
      
      <TextInput
        style={styles.textInput}
        placeholder="Type Anything..."
        value={parentText}
        onChangeText={handleInputChange}
      />

      
      <MyFunctionPage ref={myFunctionPageRef} />
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
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%',
  },
  childContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  childText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Task24;
