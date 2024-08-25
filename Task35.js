import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Task35 = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await AsyncStorage.getItem('userData');
        if (data) {
          const parsedData = JSON.parse(data);
          const now = new Date().getTime();
          const dataTime = new Date(parsedData.timestamp).getTime();

          if (now - dataTime < 60000) { // Check if timestamp is less than one minute old
            setName(parsedData.name);
            setAge(parsedData.age);
            setCountry(parsedData.country);
          }
        }
      } catch (err) {
        Alert.alert('Failed to fetch data');
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async () => {
    const timestamp = new Date().toISOString();
    const userData = {
      name,
      age,
      country,
      timestamp,
    };

    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      Alert.alert('Data saved successfully');
    } catch (err) {
      Alert.alert('Failed to save data');
    }
  };

  const handleFetchData = async () => {
    try {
      const data = await AsyncStorage.getItem('userData');
      if (data) {
        const parsedData = JSON.parse(data);
        Alert.alert('Fetched Data', JSON.stringify(parsedData, null, 2));
      } else {
        Alert.alert('No data found');
      }
    } catch (err) {
      Alert.alert('Failed to fetch data');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Country"
        value={country}
        onChangeText={setCountry}
      />
      <Button title="Submit" onPress={handleSubmit} />
      <Button title="Fetch Data" onPress={handleFetchData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default Task35;
