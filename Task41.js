
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function ScreenOne() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen 1</Text>
    </View>
  );
}

function ScreenTwo() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen 2</Text>
    </View>
  );
}

function ScreenThree() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen 3</Text>
    </View>
  );
}

function ScreenFour() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen 4</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function Task41() {
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
