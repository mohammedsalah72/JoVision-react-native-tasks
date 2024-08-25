import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';


const MyFunctionPage = () => {
  
  useEffect(() => {
    console.log('MyFunctionPage loaded');

    
    return () => {
      console.log('MyFunctionPage unloaded');
    };
  }, []); 

  return (
    <View style={styles.functionPageContainer}>
      <Text style={styles.functionPageText}>Welcome to MyFunctionPage!</Text>
    </View>
  );
};


const Task21 = () => {
  const [showMyFunctionPage, setShowMyFunctionPage] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        title={showMyFunctionPage ? 'Hide' : 'Show'}
        onPress={() => setShowMyFunctionPage(!showMyFunctionPage)}
      />
      {showMyFunctionPage && <MyFunctionPage />}
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
  functionPageContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: 'blue', 
    borderRadius: 10,
    alignItems: 'center',
  },
  functionPageText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', 
  },
});

export default Task21;
