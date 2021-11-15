import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Prayer } from '.';
export type RootStackParamList = {
  Registration: undefined;
  Authentication: undefined;
  MyDesk: undefined;
  CreateColumn: undefined;
  UpdateColumn: { columnId: number; title: string };
  Prayer: { columnId: number; title: string };
  Details: {
    prayerDetail: Prayer;
  };
};
export type authenticationScreenProp = StackNavigationProp<
  RootStackParamList,
  'Authentication'
>;

export type registrationScreenProp = StackNavigationProp<
  RootStackParamList,
  'Registration'
>;

export type MyDeskScreenProp = StackNavigationProp<
  RootStackParamList,
  'MyDesk'
>;
export type CreateColumnScreenProp = StackNavigationProp<
  RootStackParamList,
  'CreateColumn'
>;
export type UpdateColumnScreenProp = StackNavigationProp<
  RootStackParamList,
  'UpdateColumn'
>;
export type PrayerScreenProp = StackNavigationProp<
  RootStackParamList,
  'Prayer'
>;
export type PrayerDetailsScreenProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>;
export type PrayerDetailsRouteProp = RouteProp<RootStackParamList, 'Details'>;
export type UpdateColumnRouteProp = RouteProp<
  RootStackParamList,
  'UpdateColumn'
>;

export type PrayerScreenRouteProp = RouteProp<RootStackParamList, 'Prayer'>;
