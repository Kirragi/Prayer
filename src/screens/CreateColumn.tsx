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
import { useNavigation } from '@react-navigation/core';
import { CreateColumnScreenProp } from '../types/navigationsType';
import { Text } from 'react-native';
import { Form, Field } from 'react-final-form';
import CreateColumnInput from '../components/CreateColumn/CreateColumnInput';
import { useDispatch } from 'react-redux';
import { requestCreateColumnAction } from '../store/saga/Columns/actions';

function CreateColumn() {
  const navigations = useNavigation<CreateColumnScreenProp>();
  const [title, useTitle] = useState('');
  const dispatch = useDispatch();
  function onSubmit() {
    if (title.trim() !== '')
      dispatch(requestCreateColumnAction({ title: title }));
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
          <TextTitle>Create Column</TextTitle>
        </TextContainer>
      </HeaderContainer>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <ContentConainer>
            <Field
              name="title"
              lable="Title"
              component={CreateColumnInput}
              value={title}
              onChangeText={(val: string) => {
                useTitle(val);
              }}
            />
            <AddButton onPress={handleSubmit}>
              <Text>Add</Text>
            </AddButton>
          </ContentConainer>
        )}
      />
    </MainContainer>
  );
}
export default CreateColumn;
