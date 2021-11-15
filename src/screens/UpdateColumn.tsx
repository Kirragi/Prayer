import React, { useState } from 'react';
import {
  MainContainer,
  HeaderContainer,
  Headerbutton,
  TextContainer,
  TextTitle,
  AddButton,
  ContentConainer,
} from '../styles/components/ColumnActionsStyle';
import BackSvg from '../assets/svg/Back';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';
import {
  CreateColumnScreenProp,
  UpdateColumnRouteProp,
} from '../types/navigationsType';
import { Text } from 'react-native';
import { Form, Field } from 'react-final-form';
import UpdateColumnInput from '../components/UpdateColumn/UpdateColumnInput';
import { useDispatch } from 'react-redux';
import { updateColumnTitleAction } from '../store/saga/Columns/actions';

function UpdateColumn() {
  const route = useRoute<UpdateColumnRouteProp>();
  const navigations = useNavigation<CreateColumnScreenProp>();
  const [title, useTitle] = useState(route.params.title);
  const dispatch = useDispatch();
  function onSubmit() {
    if (title.trim() !== '')
      dispatch(
        updateColumnTitleAction({
          id: route.params.columnId,
          title: title,
        }),
      );
    useTitle('');
    navigations.navigate('MyDesk');
  }
  return (
    <MainContainer>
      <HeaderContainer>
        <Headerbutton onPress={navigations.goBack}>
          <BackSvg />
        </Headerbutton>
        <TextContainer>
          <TextTitle>Update Column</TextTitle>
        </TextContainer>
      </HeaderContainer>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <ContentConainer>
            <Field
              name="title"
              lable="Title"
              component={UpdateColumnInput}
              value={title}
              title={title}
              onChangeText={(val: string) => {
                useTitle(val);
              }}
            />
            <AddButton onPress={handleSubmit}>
              <Text>Update</Text>
            </AddButton>
          </ContentConainer>
        )}
      />
    </MainContainer>
  );
}
export default UpdateColumn;
