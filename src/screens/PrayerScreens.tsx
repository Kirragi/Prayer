import React, { useEffect, useState } from 'react';
import {
  MainContainer,
  HeaderContainer,
  PlusContainer,
  TextContainer,
  TextHeader,
  TitleContainer,
  ContentConainer,
  FormPrayer,
  AddButton,
  FormContainer,
} from '../styles/components/PrayerStyle';
import { Form, Field } from 'react-final-form';
import PlusSvg from '../assets/svg/Plus';
import { PrayerScreenRouteProp } from '../types/navigationsType';
import AddPrayerInput from '../components/Prayer/AddPrayerInput';
import PrayerMenu from '../components/Prayer/PrayerMenu';
import SettingsSvg from '../assets/svg/SettingsSvg';
import { useRoute } from '@react-navigation/native';
import PrayerList from '../components/Prayer/PrayerList';
import { useDispatch } from 'react-redux';
import {
  requestGetPrayerAction,
  requestCreatePrayerAction,
} from '../store/saga/Prayer/actions';
function Prayer() {
  useEffect(() => {
    dispatch(requestGetPrayerAction());
  }, []);

  const route = useRoute<PrayerScreenRouteProp>();
  const dispatch = useDispatch();
  const [title, useTitle] = useState('');
  const [statusMenu, useStausMenu] = useState(false);
  function onSubmit() {
    if (title.trim() !== '')
      dispatch(
        requestCreatePrayerAction({
          columnId: route.params.columnId,
          title: title,
        }),
      );
    useTitle('');
  }
  return (
    <MainContainer>
      <HeaderContainer>
        <TitleContainer>
          <TextContainer>
            <TextHeader>{route.params.title}</TextHeader>
          </TextContainer>
          <PlusContainer>
            <SettingsSvg />
          </PlusContainer>
        </TitleContainer>
        <PrayerMenu statusMenu={statusMenu} useStausMenu={useStausMenu} />
      </HeaderContainer>
      {statusMenu ? (
        <></>
      ) : (
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <FormContainer>
              <FormPrayer>
                <AddButton onPress={handleSubmit}>
                  <PlusSvg fill={'#72A8BC'} size={30} />
                </AddButton>
                <Field
                  name="title"
                  lable="Title"
                  component={AddPrayerInput}
                  title={title}
                  onChangeText={(val: string) => {
                    useTitle(val);
                  }}
                />
              </FormPrayer>
            </FormContainer>
          )}
        />
      )}
      {statusMenu ? (
        <></>
      ) : (
        <ContentConainer>
          <PrayerList column={route.params.columnId} />
        </ContentConainer>
      )}
    </MainContainer>
  );
}

export default Prayer;
