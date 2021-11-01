import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from '../screens/RegistrationScreen';
import Authentication from '../screens/AuthenticationScreen';
import MyDesk from '../screens/MyDesk';
import Prayer from '../screens/PrayerScreens';
import PrayerDetails from '../screens/PrayerDetailsScreen';

const Stack = createNativeStackNavigator();
function Navigator() {
  return (
    <Stack.Navigator
      initialRouteName="App"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Authentication" component={Authentication} />
      <Stack.Screen name="MyDesk" component={MyDesk} />
      <Stack.Screen name="Prayer" component={Prayer} />
      <Stack.Screen name="Details" component={PrayerDetails} />
    </Stack.Navigator>
  );
}
export default Navigator;
