import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import {
  PrayerDetailsRouteProp,
  PrayerDetailsScreenProp,
} from '../types/navigationsType';
import { TouchableOpacity } from 'react-native';
import BackSvg from '../assets/svg/Back';
import PrayerLine from '../assets/svg/PrayerLine';
import PlusSvg from '../assets/svg/Plus';
import { Form, Field } from 'react-final-form';
import AddCommentInput from '../components/PrayerDetails/CommentInput';
import { useNavigation } from '@react-navigation/core';
import { useDispatch } from 'react-redux';
import CommentSvg from '../assets/svg/Comment';
import CommentList from '../components/PrayerDetails/CommentList';
import {
  requestGetCommentsAction,
  requestCreateCommentAction,
} from '../store/saga/Comments/actions';
import {
  HeaderContainer,
  Headerbutton,
  TextContainer,
  TextTitle,
  LastTime,
  IndecateActive,
  LastTimeText,
  AddMembersButton,
  Context,
  AddCommentButton,
  OpenHistoryText,
  AddCommentForm,
  ImageMembers,
  DataPrayerTime,
  MainContainer,
  Date,
  RowContainer,
  Members,
  MembersContainer,
  Score,
  DateAded,
  TimesTotal,
  Caption,
  TimesOthers,
  TimesMe,
} from '../styles/components/PrayerDetailsStyle';
function PrayerDetails() {
  const navigations = useNavigation<PrayerDetailsScreenProp>();
  const route = useRoute<PrayerDetailsRouteProp>();
  const dispatch = useDispatch();
  const [title, useTitle] = useState('');
  useEffect(() => {
    dispatch(requestGetCommentsAction());
  }, []);
  function onSubmit() {
    if (title.trim() !== '')
      dispatch(
        requestCreateCommentAction({
          id: route.params.prayerDetail.id,
          body: title,
        }),
      );
    useTitle('');
  }
  return (
    <MainContainer>
      <HeaderContainer>
        <Headerbutton>
          <TouchableOpacity onPress={navigations.goBack}>
            <BackSvg />
          </TouchableOpacity>
          <PrayerLine fill={'#ffff'} />
        </Headerbutton>
        <TextContainer>
          <TextTitle>{route.params.prayerDetail.title}</TextTitle>
        </TextContainer>
      </HeaderContainer>
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
          <AddMembersButton>
            <PlusSvg fill={'#fff'} size={17} />
          </AddMembersButton>
        </Members>
        <Caption>COMMENTS</Caption>
      </MembersContainer>
      <CommentList prayerId={route.params.prayerDetail.id} />
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <AddCommentForm>
            <AddCommentButton onPress={handleSubmit}>
              <CommentSvg />
            </AddCommentButton>
            <Field
              name="title"
              lable="Title"
              component={AddCommentInput}
              title={title}
              onChangeText={(val: string) => {
                useTitle(val);
              }}
            />
          </AddCommentForm>
        )}
      />
    </MainContainer>
  );
}
export default PrayerDetails;
