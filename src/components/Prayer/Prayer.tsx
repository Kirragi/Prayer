import React from 'react';
import { useDispatch } from 'react-redux';
import UserSvg from '../../assets/svg/UserSvg';
import PrayerLine from '../../assets/svg/PrayerLine';
import Swipeout from 'react-native-swipeout';
import CheckedSvg from '../../assets/svg/Checked';
import { changeChecked } from '../../store/actions';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { PrayerScreenProp } from '../../types';
import { PrayerType } from '../../types';
import {
  SwipeoutDefault,
  PreyerIndicate,
  PreyerChecked,
  PreyerTextCheck,
  PreyerText,
  Counter,
  PrayerCard,
} from '../../styles/components/PrayerStyle';
function Prayer(props: { prayer: PrayerType }) {
  const navigations = useNavigation<PrayerScreenProp>();
  const prayer = props.prayer;
  const dispatch = useDispatch();
  const swipeoutBtns = [
    {
      text: 'Deleted',
      backgroundColor: '#AC5253',
    },
  ];
  return (
    <PrayerCard>
      <Swipeout style={styles.container} right={swipeoutBtns}>
        <SwipeoutDefault
          onPress={() =>
            navigations.navigate('Details', { prayerDetail: prayer })
          }>
          <PreyerIndicate></PreyerIndicate>
          <PreyerChecked
            onPress={() => dispatch(changeChecked({ id: prayer.id }))}>
            {prayer.checked ? <CheckedSvg /> : <></>}
          </PreyerChecked>
          {!prayer.checked ? (
            <PreyerText numberOfLines={1}>{prayer.title}</PreyerText>
          ) : (
            <PreyerTextCheck numberOfLines={1}>{prayer.title}</PreyerTextCheck>
          )}
          <UserSvg />

          <Counter>1</Counter>
          <View style={{ marginTop: 7 }}>
            <PrayerLine fill={'#72A8BC'} />
          </View>

          <Counter>123</Counter>
        </SwipeoutDefault>
      </Swipeout>
    </PrayerCard>
  );
}

export default Prayer;
const styles = StyleSheet.create({
  container: {
    width: 345,
    maxHeight: 66,
    minHeight: 65,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});
