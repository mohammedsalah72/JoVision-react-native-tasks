import React, { Component, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Provider, connect } from 'react-redux';
import { configureStore, createSlice } from 'reduxjs/toolkit';


const textSlice = createSlice({
  name: 'text',
  initialState: { value: '' },
  reducers: {
    setText: (state, action) => {
      state.value = action.payload;
    },
  },
});


const { setText } = textSlice.actions;
const textReducer = textSlice.reducer;


const store = configureStore({
  reducer: {
    text: textReducer,
  },
});


class ComponentOneClass extends Component {
  handleTextChange = (value) => {
    this.props.setText(value);
  };

  render() {
    return (
      <View style={styles.componentContainer}>
        <TextInput
          style={styles.input}
          value={this.props.text}
          onChangeText={this.handleTextChange}
          placeholder="Enter text here"
        />
        <Text>Text: {this.props.text}</Text>
      </View>
    );
  }
}


const mapStateToProps = (state) => ({
  text: state.text.value,
});

const mapDispatchToProps = {
  setText,
};


const ConnectedComponentOneClass = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentOneClass);


function Task40() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Button
          title={isVisible ? 'Hide Component' : 'Show Component'}
          onPress={() => setIsVisible(!isVisible)}
        />
        {isVisible && <ConnectedComponentOneClass />}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  componentContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
    width: 200,
  },
});

export default Task40;
