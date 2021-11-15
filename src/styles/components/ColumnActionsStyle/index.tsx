import styled from 'styled-components/native';
export const MainContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: #ffff;
`;
export const HeaderContainer = styled.View`
  width: 100%;
  min-height: 64px;
  max-height: 64px;
  background-color: #bfb393;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
export const Headerbutton = styled.TouchableOpacity`
  max-width: 29px;
  min-height: 29px;
  max-height: 29px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
`;

export const TextContainer = styled.View`
  width: 100%;
  min-height: 50px;
  max-height: 50px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const TextTitle = styled.Text`
  margin-right: 49px;
  font-size: 17px;
  line-height: 27px;
  color: #ffffff;
`;

export const ColumnInput = styled.TextInput`
  width: 80%;
  height: 50px;
  font-size: 17px;
  border-width: 2px;
  border-color: #bfb393;
  padding-left: 14px;
  padding-right: 10px;
  padding-left: 10px;
`;
export const AddButton = styled.TouchableOpacity`
  max-width: 50px;
  min-height: 54px;
  max-height: 52px;
  background-color: #bfb393;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const ContentConainer = styled.View`
  width: 100%;
  min-height: 100px;
  max-height: 100px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
