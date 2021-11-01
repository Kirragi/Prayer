import React from 'react';
import {
  MenuContainer,
  NoneActiveContainer,
  ActiveContainer,
  TextMenu,
  ActiveTextMenu,
} from '../../styles/components/PrayerStyle';
import { useSelector, useDispatch } from 'react-redux';
import { activePrayers, activeSubscribed } from '../../store/actions';
import { State } from '../../types';
function PrayerMenu() {
  let menu: JSX.Element;
  let active = useSelector((state: State) => state.PrayerMenu);
  let dispatch = useDispatch();
  if (active) {
    menu = (
      <MenuContainer>
        <NoneActiveContainer onPress={() => dispatch(activePrayers())}>
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
        <NoneActiveContainer onPress={() => dispatch(activeSubscribed())}>
          <TextMenu>SUBSCRIBED</TextMenu>
        </NoneActiveContainer>
      </MenuContainer>
    );
  }
  return menu;
}
export default PrayerMenu;
