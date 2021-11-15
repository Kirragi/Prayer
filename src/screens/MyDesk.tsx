import React, { useEffect } from 'react';
import ColumnsList from '../components/MyDesk/ColumnsList';
import { useNavigation } from '@react-navigation/core';
import { MyDeskScreenProp } from '../types/navigationsType';
import {
  MainContainer,
  HeaderContainer,
  PlusContainer,
  TextContainer,
  TextHeader,
} from '../styles/components/MeDeskStyle';
import PlusSvg from '../assets/svg/Plus';
import { useDispatch } from 'react-redux';
import { requestGetColumnsAction } from '../store/saga/Columns/actions';

function MyDesk() {
  const navigations = useNavigation<MyDeskScreenProp>();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestGetColumnsAction());
  }, []);
  return (
    <MainContainer>
      <HeaderContainer>
        <TextContainer>
          <TextHeader>My Desk</TextHeader>
        </TextContainer>
        <PlusContainer onPress={() => navigations.navigate('CreateColumn')}>
          <PlusSvg fill={'#72A8BC'} size={30} />
        </PlusContainer>
      </HeaderContainer>
      <ColumnsList />
    </MainContainer>
  );
}
export default MyDesk;
