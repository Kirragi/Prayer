import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
export const MainContainer = styled.View`
  flex: 1;
  background-color: #ffffff;
`;
export const HeaderContainer = styled.View`
  flex: 1;
  width: 100%;
  max-height: 64px;
  min-height: 64px;
  border-bottom-width: 1px;
  flex-direction: row;
  align-items: center;
  border-color: #e5e5e5;
`;
export const PlusContainer = styled.TouchableOpacity`
  width: 31px;
  max-height: 64px;
  margin-right: 14px;
`;
export const TextContainer = styled.View`
  flex: 1;
  width: 100%;
  max-height: 64px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const TextHeader = styled.Text`
  font-size: 17px;
  font-weight: bold;
  margin-left: 45px;
  color: #514d47;
`;
export const Column = styled.TouchableOpacity`
  width: 345px;
  max-height: 56px;
  min-height: 56px;
  margin-top: 10px;
  flex: 1;
  justify-content: center;
`;

export const ContentContainer = styled.ScrollView`
  width: 100%;
`;

export const ColumnContainer = styled.View`
  flex: 1;
  align-items: center;
`;
export const ColumnText = styled.Text`
  margin-top: 15px;
  margin-left: 15px;
  font-size: 17px;
  font-weight: bold;
  color: #514d47;
`;
export const ColumnContent = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
`;

export const swipeout = StyleSheet.create({
  container: {
    width: 345,
    maxHeight: 56,
    minHeight: 56,
    backgroundColor: '#0000',
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 4,
  },
});
