import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';

const Task26 = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [loading, setLoading] = useState(false);

  
  const fetchIpNonBlocking = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      setIpAddress(data.ip);
    } catch (error) {
      console.error(error);
    }
  };

  
  const fetchIpBlocking = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      setIpAddress(data.ip);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.ipText}>{ipAddress || 'click to git IP adriss'}</Text>

      <Button title="Fetch IP Non-blocking" onPress={fetchIpNonBlocking} />

      <Button
        title="Fetch IP with Blocking"
        onPress={fetchIpBlocking}
        style={styles.button}
      />

      {loading && <ActivityIndicator size="large" color="#0000ff" />}
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
  ipText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    marginVertical: 10,
  },
});

export default Task26;
