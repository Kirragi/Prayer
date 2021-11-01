import React from 'react';
import {
  MainContainer,
  HeaderContainer,
  PlusContainer,
  TextContainer,
  TextHeader,
  TitleContainer,
  ContentConainer,
} from '../styles/components/PrayerStyle';
import { PrayerScreenRouteProp, State } from '../types';
import InputAddPrayer from '../components/Prayer/InputAddPrayer';
import PrayerMenu from '../components/Prayer/PrayerMenu';
import SettingsSvg from '../assets/svg/SettingsSvg';
import { useRoute } from '@react-navigation/native';
import PrayerList from '../components/Prayer/PrayerList';
import { useSelector } from 'react-redux';
function Prayer() {
  const route = useRoute<PrayerScreenRouteProp>();
  const menuActive = useSelector((state: State) => state.PrayerMenu);
  return (
    <MainContainer>
      <HeaderContainer>
        <TitleContainer>
          <TextContainer>
            <TextHeader>{route.params.columnId}</TextHeader>
          </TextContainer>
          <PlusContainer>
            <SettingsSvg />
          </PlusContainer>
        </TitleContainer>
        <PrayerMenu />
      </HeaderContainer>
      <InputAddPrayer />
      <ContentConainer>
        {menuActive ? (
          <PrayerList column={route.params.columnId + ' subscribed'} />
        ) : (
          <PrayerList column={route.params.columnId} />
        )}
      </ContentConainer>
    </MainContainer>
  );
}

export default Prayer;
