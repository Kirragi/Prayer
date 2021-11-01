import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
export type RootStackParamList = {
  Registration: undefined;
  Authentication: undefined;
  MyDesk: undefined;
  Prayer: { columnId: string };
  Details: {
    prayerDetail: PrayerType;
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
export type PrayerScreenProp = StackNavigationProp<
  RootStackParamList,
  'Prayer'
>;
export type PrayerDetailsScreenProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>;
export type PrayerDetailsRouteProp = RouteProp<RootStackParamList, 'Details'>;

export type PrayerScreenRouteProp = RouteProp<RootStackParamList, 'Prayer'>;

export type ColumnType = {
  title: string;
  description: string;
};
export type CommentType = {
  id: string;
  author: string;
  body: string;
  dateCreate: string;
  image: string;
};
export type PrayerType = {
  id: string;
  title: string;
  description: string;
  checked: boolean;
};
export type UserSignIn = {
  email: string;
  password: string;
};

export type UserSignUp = {
  email: string;
  name: string;
  password: string;
};
export type User = {
  logged: boolean;
  id: string;
  email: string;
  name: string;
  token: string;
  pass: string;
  errorExists: boolean;
  errorText: string;
};
export type Loader = {
  user: boolean;
};
export type State = {
  user: User;
  Column: ColumnType[];
  Comment: CommentType[];
  Prayer: PrayerType[];
  PrayerMenu: boolean;
};
