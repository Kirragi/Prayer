import React from 'react';
import { TouchableOpacity } from 'react-native';
import BackSvg from '../../assets/svg/Back';
import PrayerLine from '../../assets/svg/PrayerLine';
import { useNavigation } from '@react-navigation/core';
import { PrayerDetailsScreenProp } from '../../types';
import {
  HeaderContainer,
  Headerbutton,
  TextContainer,
  TextTitle,
} from '../../styles/components/PrayerDetailsStyle';
function Header(props: { title: string }) {
  const navigations = useNavigation<PrayerDetailsScreenProp>();
  return (
    <HeaderContainer>
      <Headerbutton>
        <TouchableOpacity onPress={navigations.goBack}>
          <BackSvg />
        </TouchableOpacity>

        <PrayerLine fill={'#ffff'} />
      </Headerbutton>
      <TextContainer>
        <TextTitle>{props.title}</TextTitle>
      </TextContainer>
    </HeaderContainer>
  );
}
export default Header;
