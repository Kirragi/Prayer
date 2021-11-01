import React, { useState } from 'react';
import { Text, View, Image, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Header from '../components/PrayerDetails/Header';
import { useRoute } from '@react-navigation/native';
import { PrayerDetailsRouteProp, PrayerDetailsScreenProp } from '../types';
import PlusSvg from '../assets/svg/Plus';
import { signUp } from '../api/user';
import CommentSvg from '../assets/svg/Comment';
import CommentList from '../components/PrayerDetails/CommentList';
import { signUpActionCreator } from '../store/saga/User/actions';
import {
  LastTime,
  IndecateActive,
  LastTimeText,
  ButtonAdd,
  Context,
  OpenHistoryText,
  AddComment,
  ImageMembers,
  DataPrayerTime,
  MainContainer,
  AddCommentInput,
  Date,
  RowContainer,
  Members,
  MembersContainer,
  Score,
  DateAded,
  TimesTotal,
  TimeTextContainer,
  Caption,
  TimesOthers,
  TimesMe,
} from '../styles/components/PrayerDetailsStyle';
function PrayerDetails() {
  const route = useRoute<PrayerDetailsRouteProp>();
  const [comment, onChangeComment] = useState('');
  return (
    <MainContainer>
      <Header title={route.params.prayerDetail.title} />
      <LastTime>
        <IndecateActive></IndecateActive>
        <LastTimeText>Last prayed 8 min ago</LastTimeText>
      </LastTime>
      <DataPrayerTime>
        <RowContainer>
          <DateAded>
            <Date>July 25 2017 </Date>
            <Context>Date Added</Context>
            <OpenHistoryText>Opened for 4 days</OpenHistoryText>
          </DateAded>
          <TimesTotal>
            <Score>123</Score>
            <Context>Times Prayed Total</Context>
          </TimesTotal>
        </RowContainer>
        <RowContainer>
          <TimesMe>
            <Score>63</Score>
            <Context>Times Prayed by Me</Context>
          </TimesMe>
          <TimesOthers>
            <Score>60</Score>
            <Context>Times Prayed by Others</Context>
          </TimesOthers>
        </RowContainer>
      </DataPrayerTime>
      <MembersContainer>
        <Caption>MEMBERS</Caption>
        <Members>
          <ImageMembers source={require('../assets/png/eeww.png')} />
          <ImageMembers source={require('../assets/png/erfer.png')} />
          <ButtonAdd>
            <PlusSvg fill={'#fff'} size={17} />
          </ButtonAdd>
        </Members>
        <Caption>COMMENTS</Caption>
      </MembersContainer>
      <CommentList />
      <AddComment>
        <CommentSvg />
        <AddCommentInput
          placeholder="Add a comment..."
          onChangeText={onChangeComment}
          value={comment}
        />
      </AddComment>
    </MainContainer>
  );
}
export default PrayerDetails;
