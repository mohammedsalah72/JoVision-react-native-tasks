import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';


class MyClassPage extends React.Component {
  
  componentDidMount() {
    console.log('MyClassPage loaded');
  }

  
  componentWillUnmount() {
    console.log('MyClassPage unloaded');
  }

  render() {
    return (
      <View style={styles.classPageContainer}>
        <Text style={styles.classPageText}>Welcome to MyClassPage!</Text>
      </View>
    );
  }
}


const Task20 = () => {
  const [showMyClassPage, setShowMyClassPage] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        title={showMyClassPage ? 'Hide' : 'Show'}
        onPress={() => setShowMyClassPage(!showMyClassPage)}
      />
      {showMyClassPage && <MyClassPage />}
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
  classPageContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
  },
  classPageText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Task20;
