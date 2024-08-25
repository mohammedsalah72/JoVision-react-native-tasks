import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import store from './redux/store';
import { setText, showComponentOne } from './redux/actions';


const ComponentOne = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.text);

  return (
    <View style={styles.componentContainer}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(newText) => dispatch(setText(newText))}
        placeholder="Enter text"
      />
    </View>
  );
};


const Task39 = () => {
  const dispatch = useDispatch();
  const showComponentOneState = useSelector((state) => state.showComponentOne);

  const toggleComponent = () => {
    dispatch(showComponentOne(!showComponentOneState));
  };

  return (
    <View style={styles.appContainer}>
      <Button
        title={showComponentOneState ? 'Hide Component One' : 'Show Component One'}
        onPress={toggleComponent}
      />
      {showComponentOneState && <ComponentOne />}
    </View>
  );
};


export default function AppWrapper() {
  return (
    <Provider store={store}>
      <Task39 />
    </Provider>
  );
}


const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  componentContainer: {
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
  },
});



