import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


class MyClassPage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
  }

  
  handleTextChange = (text) => {
    this.setState({ inputText: text });
    this.props.onTextChange(text); 
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type something..."
          onChangeText={this.handleTextChange}
        />
      </View>
    );
  }
}


const Task23 = () => {
  const [parentText, setParentText] = useState('');
  const [showMyClassPage, setShowMyClassPage] = useState(false);

  return (
    <View style={styles.container}>
      
      <Text style={styles.parentText}>{parentText}</Text>

      
      <Button
        title={showMyClassPage ? 'Hide' : 'Show'}
        onPress={() => setShowMyClassPage(!showMyClassPage)}
      />

      
      {showMyClassPage && (
        <MyClassPage onTextChange={setParentText} />
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
    fontSize: 20,
    marginBottom: 20,
    color: 'red',
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

export default Task23;
