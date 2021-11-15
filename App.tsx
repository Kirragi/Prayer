import React from 'react';
import Navigator from './src/navigations/Navigator';
import { store } from './src/store';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};
export default App;
