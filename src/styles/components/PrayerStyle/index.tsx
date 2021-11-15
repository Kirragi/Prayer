import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
export const MainContainer = styled.View`
  flex: 1;
  background-color: #ffffff;
`;
export const HeaderContainer = styled.View`
  flex: 1;
  width: 100%;
  max-height: 103px;
  border-bottom-width: 1px;
  border-color: #e5e5e5;
`;
export const TitleContainer = styled.View`
  flex: 1;
  width: 100%;
  max-height: 64px;
  flex-direction: row;
  align-items: center;
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
  margin-left: 45px;
  font-weight: bold;
  color: #514d47;
`;
export const MenuContainer = styled.View`
  flex: 1;
  width: 100%;
  max-height: 39px;
  flex-direction: row;
  justify-content: center;
`;
export const NoneActiveContainer = styled.TouchableOpacity`
  width: 50%;
  max-height: 39px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const ActiveContainer = styled.TouchableOpacity`
  width: 50%;
  max-height: 39px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom-width: 2px;
  border-color: #72a8bc;
`;
export const TextMenu = styled.Text`
  font-weight: bold;
  line-height: 20px;
  font-size: 13px;
  line-height: 15px;
`;
export const ActiveTextMenu = styled.Text`
  font-size: 13px;
  font-weight: bold;
  line-height: 15px;
  line-height: 20px;
  color: #72a8bc;
`;
export const ContentConainer = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
`;
export const FormPrayer = styled.View`
  padding-left: 10px;
  max-width: 345px;
  height: 50px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: #e5e5e5;
  border-radius: 10px;
`;
export const PrayerInput = styled.TextInput`
  font-size: 17px;
  width: 300px;
  padding-left: 14px;
  padding-right: 10px;
`;
export const PrayerCard = styled.View`
  width: 345px;
  max-height: 66px;
  min-height: 65px;
`;
export const SwipeoutDefault = styled.TouchableOpacity`
  width: 345px;
  max-height: 66px;
  min-height: 65px;
  border-bottom-width: 1px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-color: #e5e5e5;
  background-color: #ffffff;
`;
export const PreyerIndicate = styled.View`
  width: 3px;
  height: 22px;
  background-color: #ac5253;
  border-radius: 10px;
  margin-right: 16px;
`;
export const PreyerChecked = styled.TouchableOpacity`
  max-width: 22px;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 22px;
  border-width: 1px;
  border-radius: 4px;
  margin-right: 15px;
  border-color: #514d47;
`;
export const PreyerText = styled.Text`
  width: 184px;
  font-size: 17px;
  margin-right: 10px;
  color: #514d47;
`;
export const Counter = styled.Text`
  font-size: 13px;
  margin-right: 5px;
  margin-left: 5px;
`;
export const ScrollPrayer = styled.ScrollView`
  width: 345px;
`;
export const PreyerTextCheck = styled.Text`
  width: 184px;
  font-size: 17px;
  margin-right: 10px;
  text-decoration: line-through;
  color: #514d47;
`;

export const ShowButtonContainer = styled.View`
  width: 100%;
  max-height: 30px;
  min-height: 29px;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const ShowButton = styled.TouchableOpacity`
  width: 209px;
  max-height: 30px;
  min-height: 29px;
  background-color: #bfb393;
  border-radius: 15px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const TextShowButton = styled.Text`
  font-size: 12px;
  color: #ffff;
`;
export const FormContainer = styled.View`
  min-width: 100%;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 16px;
  max-height: 50px;
`;

export const AddButton = styled.TouchableOpacity`
  width: 24px;
  max-height: 24px;
  min-height: 24px;
  margin-bottom: 5px;
`;
export const PrayerLineContainer = styled.View`
  margin-top: 7px;
`;
export const swipeout = StyleSheet.create({
  container: {
    width: 345,
    maxHeight: 66,
    minHeight: 65,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});
