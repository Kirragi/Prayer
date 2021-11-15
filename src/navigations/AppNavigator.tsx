import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyDesk from '../screens/MyDesk';
import Prayer from '../screens/PrayerScreens';
import PrayerDetails from '../screens/PrayerDetailsScreen';
import CreateColumn from '../screens/CreateColumn';
import UpdateColumn from '../screens/UpdateColumn';

const Stack = createNativeStackNavigator();
function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="MyDesk"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyDesk" component={MyDesk} />
      <Stack.Screen name="CreateColumn" component={CreateColumn} />
      <Stack.Screen name="UpdateColumn" component={UpdateColumn} />
      <Stack.Screen name="Prayer" component={Prayer} />
      <Stack.Screen name="Details" component={PrayerDetails} />
    </Stack.Navigator>
  );
}
export default AppNavigator;
