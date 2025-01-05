import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home'; // Placeholder for Home screen
import Contact from './Contact'; // Placeholder for Contact screen
import AboutUs from './AboutUs'; // Placeholder for About Us screen

const Stack = createStackNavigator();

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#e2bee2' },
      }}
    >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}