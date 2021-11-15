import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from '../screens/RegistrationScreen';
import Authentication from '../screens/AuthenticationScreen';

const Stack = createNativeStackNavigator();
function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Authentication"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Authentication" component={Authentication} />
      <Stack.Screen name="Registration" component={Registration} />
    </Stack.Navigator>
  );
}
export default AuthNavigator;
