import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigations/Navigator';
import { store } from './src/store';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
