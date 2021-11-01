import styled from 'styled-components/native';

export const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;
export const InputAuth = styled.TextInput`
  font-size: 18px;
  color: #bfb393;
  background-color: #ededed;
  width: 300px;
  height: 50px;
  margin: 12px;
  border-radius: 30px;
  border-width: 2px;
  padding: 10px;
  padding-left: 25px;
`;
export const ButtonSign = styled.TouchableOpacity`
  height: 50px;
  width: 100px;
  margin: 15px;
  background-color: #bfb393;
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;
export const ButtonReg = styled.TouchableOpacity`
  height: 50px;
  width: 100px;
  margin: 15px;
  flex: 1;
  border-width: 2px;
  align-items: center;
  justify-content: center;
  border-color: #bfb393;
  border-radius: 30px;
`;
export const ButtonContainer = styled.View`
  height: 40px;
  width: 330px;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;
export const ProfileSvg = styled.View`
  margin-bottom: 20px;
  margin-top: 30px;
`;
export const AurhText = styled.Text`
  color: #bfb393;
  font-size: 24px;
`;
export const SignText = styled.Text`
  font-size: 18px;
`;
export const RegText = styled.Text`
  color: #bfb393;
  font-size: 18px;
`;
