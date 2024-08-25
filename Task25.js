import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


class MyClassPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childText: '', 
    };
  }

  
  updateText = (newText) => {
    this.setState({ childText: newText });
  };

  render() {
    return (
      <View style={styles.childContainer}>
        <Text style={styles.childText}>{this.state.childText}</Text>
      </View>
    );
  }
}

const MyClassPageWithRef = React.forwardRef((props, ref) => {
  const myClassPageRef = useRef();

  React.useImperativeHandle(ref, () => ({
    updateText: (newText) => {
      if (myClassPageRef.current) {
        myClassPageRef.current.updateText(newText);
      }
    },
  }));

  return <MyClassPage ref={myClassPageRef} />;
});


const Task25 = () => {
  const [parentText, setParentText] = useState('');
  const myClassPageRef = useRef(null);

  
  const handleInputChange = (text) => {
    setParentText(text);
    if (myClassPageRef.current) {
      myClassPageRef.current.updateText(text); 
    }
  };

  return (
    <View style={styles.container}>
      
      <TextInput
        style={styles.textInput}
        placeholder="Type ..."
        value={parentText}
        onChangeText={handleInputChange}
      />

      
      <MyClassPageWithRef ref={myClassPageRef} />
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
    borderColor: 'green',
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

export default Task25;
