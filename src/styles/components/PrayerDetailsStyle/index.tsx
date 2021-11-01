import styled from 'styled-components/native';

export const MainContainer = styled.ScrollView`
  width: 100%;
  height: 100%;
  background-color: #ffff;
`;
export const HeaderContainer = styled.View`
  width: 100%;
  min-height: 130px;
  max-height: 130px;
  background-color: #bfb393;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;
export const Headerbutton = styled.View`
  margin-top: 17px;
  margin-bottom: 15px;
  width: 93%;
  min-height: 29px;
  max-height: 29px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextContainer = styled.View`
  margin-bottom: 19px;
  width: 93%;
  min-height: 50px;
  max-height: 40px;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
export const TextTitle = styled.Text`
  font-size: 17px;
  line-height: 27px;
  color: #ffffff;
`;
export const LastTime = styled.View`
  width: 100%;
  min-height: 50px;
  max-height: 50px;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
export const IndecateActive = styled.View`
  width: 3px;
  height: 22px;
  background-color: #ac5253;
  border-radius: 10px;
  margin-left: 15px;
  margin-right: 10px;
`;
export const LastTimeText = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: #514d47;
`;
export const DataPrayerTime = styled.View`
  width: 100%;
  max-height: 216px;
  min-height: 216px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: #e5e5e5;
`;
export const RowContainer = styled.View`
  width: 100%;
  max-height: 108px;
  min-height: 108px;
  flex: 1;
  flex-direction: row;
`;
export const DateAded = styled.View`
  width: 50%;
  max-height: 108px;
  min-height: 108px;
  flex: 1;
  justify-content: center;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-color: #e5e5e5;
  padding-top: 15px;
`;
export const TimesTotal = styled.View`
  width: 50%;
  max-height: 108px;
  flex: 1;
  justify-content: center;
  min-height: 108px;
  border-bottom-width: 1px;
  border-color: #e5e5e5;
`;
export const TimesMe = styled.View`
  width: 50%;
  max-height: 108px;
  min-height: 108px;
  flex: 1;
  justify-content: center;
  border-right-width: 1px;
  border-color: #e5e5e5;
`;
export const TimesOthers = styled.View`
  width: 50%;
  flex: 1;
  justify-content: center;
  max-height: 108px;
  min-height: 108px;
`;
export const TimeTextContainer = styled.View`
  width: 100%;
  max-height: 108px;
  min-height: 108px;
`;
export const Date = styled.Text`
  font-size: 22px;
  line-height: 26px;
  color: #bfb393;
  margin-bottom: 7px;
  margin-left: 15px;
`;
export const Context = styled.Text`
  font-size: 13px;
  line-height: 15px;
  margin-left: 15px;
  color: #514d47;
`;
export const OpenHistoryText = styled.Text`
  font-size: 13px;
  line-height: 15px;
  color: #72a8bc;
  margin-left: 15px;
`;
export const Score = styled.Text`
  font-size: 32px;
  margin-left: 13px;
  line-height: 37px;
  color: #bfb393;
`;
export const MembersContainer = styled.View`
  width: 100%;
  max-height: 144px;
  min-height: 144px;
  border-bottom-width: 1px;
  border-color: #e5e5e5;
  padding-left: 14px;
  padding-top: 20px;
`;

export const Caption = styled.Text`
  font-size: 13px;
  line-height: 15px;
  color: #72a8bc;
`;
export const Members = styled.View`
  width: 100%;
  max-height: 32px;
  min-height: 32px;
  margin-top: 20px;
  margin-bottom: 28px;
  flex: 1;
  align-items: center;
  flex-direction: row;
`;
export const ButtonAdd = styled.TouchableOpacity`
  max-width: 32px;
  max-height: 32px;
  min-height: 32px;
  background-color: #bfb393;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-left: 1px;
  border-radius: 20px;
`;
export const ImageMembers = styled.Image`
  max-width: 32px;
  max-height: 32px;
  min-height: 32px;
  margin-right: 10px;
  border-radius: 20px;
`;
export const CommentContainer = styled.View`
  max-width: 100%;
  max-height: 74px;
  min-height: 74px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
  border-bottom-width: 1px;
  border-color: #e5e5e5;
`;
export const HeadComment = styled.View`
  max-height: 21px;
  min-height: 21px;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const ImageComment = styled.Image`
  width: 40px;
  max-height: 40px;
  min-height: 40px;
  margin-right: 10px;
  border-radius: 30px;
`;

export const Name = styled.Text`
  font-size: 17px;
  font-weight: bold;
  line-height: 20px;
  color: #514d47;
`;
export const Comment = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: #514d47;
`;
export const CommentDate = styled.Text`
  font-size: 13px;
  line-height: 16px;
  color: #9c9c9c;
  margin-left: 6px;
`;

export const ScrollComments = styled.ScrollView`
  width: 100%;
  max-height: 180px;
  min-height: 0px;
`;
export const AddComment = styled.View`
  background-color: #ffff;
  width: 100%;
  max-height: 56px;
  min-height: 56px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-color: #e5e5e5;
  padding-left: 16px;
`;

export const AddCommentInput = styled.TextInput`
  width: 300px;
  color: #000000;
  font-size: 17px;
  line-height: 20px;
  border-width: 0px;
  margin-left: 12px;
`;
