import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import { useSelector } from 'react-redux';
import AuthNavigator from './AuthNavigator';
import { State } from '../types';

function Navigator() {
  const isLogged = useSelector((state: State) => state.user.logged);
  return (
    <NavigationContainer>
      {isLogged ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
export default Navigator;
