import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';


class MyClassPage extends React.Component {
  render() {
    return (
      <View style={styles.classPageContainer}>
        <Button title="This is MyClassPage" disabled />
      </View>
    );
  }
}


const Task19 = () => {
  const [showMyClassPage, setShowMyClassPage] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        title="Show"
        onPress={() => setShowMyClassPage(true)}
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
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default Task19;
