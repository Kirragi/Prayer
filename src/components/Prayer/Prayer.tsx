import React from 'react';
import { useDispatch } from 'react-redux';
import UserSvg from '../../assets/svg/UserSvg';
import PrayerLine from '../../assets/svg/PrayerLine';
import Swipeout from 'react-native-swipeout';
import CheckedSvg from '../../assets/svg/Checked';
import { useNavigation } from '@react-navigation/core';
import { PrayerScreenProp } from '../../types/navigationsType';
import { PrayerProps } from '../../types';
import {
  deletePrayerAction,
  updatePrayerCheckedAction,
} from '../../store/saga/Prayer/actions';
import {
  SwipeoutDefault,
  PreyerIndicate,
  PreyerChecked,
  PreyerTextCheck,
  PreyerText,
  PrayerLineContainer,
  Counter,
  PrayerCard,
  swipeout,
} from '../../styles/components/PrayerStyle';
function Prayer(props: PrayerProps) {
  const navigations = useNavigation<PrayerScreenProp>();
  const prayer = props.prayer;
  const dispatch = useDispatch();
  const swipeoutBtns = [
    {
      text: 'Deleted',
      backgroundColor: '#AC5253',
      onPress: () => {
        dispatch(deletePrayerAction({ id: props.prayer.id }));
      },
    },
  ];
  return (
    <PrayerCard>
      <Swipeout style={swipeout.container} right={swipeoutBtns}>
        <SwipeoutDefault
          onPress={() =>
            navigations.navigate('Details', { prayerDetail: prayer })
          }>
          <PreyerIndicate></PreyerIndicate>
          <PreyerChecked
            onPress={() =>
              dispatch(
                updatePrayerCheckedAction({
                  id: props.prayer.id,
                  title: props.prayer.title,
                  checked: !props.prayer.checked,
                }),
              )
            }>
            {prayer.checked ? <CheckedSvg /> : <></>}
          </PreyerChecked>
          {!prayer.checked ? (
            <PreyerText numberOfLines={1}>{prayer.title}</PreyerText>
          ) : (
            <PreyerTextCheck numberOfLines={1}>{prayer.title}</PreyerTextCheck>
          )}
          <UserSvg />
          <Counter>1</Counter>
          <PrayerLineContainer>
            <PrayerLine fill={'#72A8BC'} />
          </PrayerLineContainer>
          <Counter>123</Counter>
        </SwipeoutDefault>
      </Swipeout>
    </PrayerCard>
  );
}

export default Prayer;
