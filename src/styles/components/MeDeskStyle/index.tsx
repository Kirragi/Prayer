import styled from 'styled-components/native';
export const MainContainer = styled.View`
  flex: 1;
  background-color: #ffffff;
`;
export const HeaderContainer = styled.View`
  flex: 1;
  width: 100%;
  max-height: 64px;
  border-bottom-width: 1px;
  flex-direction: row;
  align-items: center;
  border-color: #e5e5e5;
`;
export const PlusContainer = styled.View`
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
  margin-left: 45px;
`;
export const Column = styled.TouchableOpacity`
  border-width: 1px;
  border-color: #e5e5e5;
  width: 345px;
  max-height: 56px;
  margin-top: 10px;
  border-radius: 4px;
  flex: 1;
  justify-content: center;
`;

export const ColumnContainer = styled.View`
  flex: 1;
  align-items: center;
`;
export const ColumnText = styled.Text`
  margin-left: 15px;
  font-size: 17px;
`;
