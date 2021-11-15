import { FieldRenderProps } from 'react-final-form';

export type Columns = {
  id: number;
  title: string;
  description: string;
  userId: number;
};
export type Comments = {
  id: number;
  body: string;
  created: string;
  prayerId: number;
  userId: number;
};
export type Prayer = {
  id: number;
  title: string;
  description: string;
  checked: boolean;
  columnId: number;
  commentsIds: number[];
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
  columns: boolean;
  prayer: boolean;
  comments: boolean;
};
export type State = {
  user: User;
  columns: Columns[];
  comments: Comments[];
  prayer: Prayer[];
  loader: Loader;
};
export interface PrayerMenyProps {
  statusMenu: boolean;
  useStausMenu(statusMenu: boolean): void;
}
export interface PrayerProps {
  prayer: Prayer;
}
export interface PrayerListProps {
  column: number;
}
export interface CommentListProps {
  prayerId: number;
}
