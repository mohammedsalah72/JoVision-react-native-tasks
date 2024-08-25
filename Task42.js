
import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function ScreenOne({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Screen 1</Text>
      <Button
        title="Go to Screen 2"
        color="red"
        onPress={() => navigation.navigate('Screen 2')}
      />
      <Button
        title="Go to Screen 3"
        color="blue"
        onPress={() => navigation.navigate('Screen 3')}
      />
      <Button
        title="Go to Screen 4"
        color="green"
        onPress={() => navigation.navigate('Screen 4')}
      />
    </View>
  );
}


function ScreenTwo({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Screen 2</Text>
      <Button
        title="Go to Screen 1"
        color="red"
        onPress={() => navigation.navigate('Screen 1')}
      />
      <Button
        title="Go to Screen 3"
        color="blue"
        onPress={() => navigation.navigate('Screen 3')}
      />
      <Button
        title="Go to Screen 4"
        color="green"
        onPress={() => navigation.navigate('Screen 4')}
      />
    </View>
  );
}


function ScreenThree({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Screen 3</Text>
      <Button
        title="Go to Screen 1"
        color="red"
        onPress={() => navigation.navigate('Screen 1')}
      />
      <Button
        title="Go to Screen 2"
        color="blue"
        onPress={() => navigation.navigate('Screen 2')}
      />
      <Button
        title="Go to Screen 4"
        color="green"
        onPress={() => navigation.navigate('Screen 4')}
      />
    </View>
  );
}


function ScreenFour({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Screen 4</Text>
      <Button
        title="Go to Screen 1"
        color="red"
        onPress={() => navigation.navigate('Screen 1')}
      />
      <Button
        title="Go to Screen 2"
        color="blue"
        onPress={() => navigation.navigate('Screen 2')}
      />
      <Button
        title="Go to Screen 3"
        color="green"
        onPress={() => navigation.navigate('Screen 3')}
      />
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function Task42() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Screen 1" component={ScreenOne} />
        <Tab.Screen name="Screen 2" component={ScreenTwo} />
        <Tab.Screen name="Screen 3" component={ScreenThree} />
        <Tab.Screen name="Screen 4" component={ScreenFour} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
