import React from 'react';
import {
  MenuContainer,
  NoneActiveContainer,
  ActiveContainer,
  TextMenu,
  ActiveTextMenu,
} from '../../styles/components/PrayerStyle';
import { PrayerMenyProps } from '../../types';
function PrayerMenu(props: PrayerMenyProps) {
  let menu: JSX.Element;
  if (props.statusMenu) {
    menu = (
      <MenuContainer>
        <NoneActiveContainer onPress={() => props.useStausMenu(false)}>
          <TextMenu>MY PRAYERS</TextMenu>
        </NoneActiveContainer>
        <ActiveContainer>
          <ActiveTextMenu>SUBSCRIBED</ActiveTextMenu>
        </ActiveContainer>
      </MenuContainer>
    );
  } else {
    menu = (
      <MenuContainer>
        <ActiveContainer>
          <ActiveTextMenu>MY PRAYERS</ActiveTextMenu>
        </ActiveContainer>
        <NoneActiveContainer onPress={() => props.useStausMenu(true)}>
          <TextMenu>SUBSCRIBED</TextMenu>
        </NoneActiveContainer>
      </MenuContainer>
    );
  }
  return menu;
}
export default PrayerMenu;
