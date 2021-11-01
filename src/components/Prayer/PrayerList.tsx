import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { slelectPrayer } from '../../store/reducer';
import { View } from 'react-native';
import {
  ShowButtonContainer,
  TextShowButton,
  ScrollPrayer,
  ShowButton,
} from '../../styles/components/PrayerStyle';
import Prayer from './Prayer';
function PrayerList(props: { column: string }) {
  const prayers = useSelector(slelectPrayer(props.column, false));
  const prayersChecked = useSelector(slelectPrayer(props.column, true));
  const [showPrayer, stateShowPrayer] = useState(true);
  const prayerList = prayers.map((prayer) => {
    return <Prayer prayer={prayer} key={prayer.id} />;
  });
  const prayerListChecked = prayersChecked.map((prayer) => {
    return <Prayer prayer={prayer} key={prayer.id} />;
  });
  return (
    <ScrollPrayer>
      <View style={{ marginBottom: 16 }}>{prayerList}</View>
      <ShowButtonContainer>
        <ShowButton onPress={() => stateShowPrayer(!showPrayer)}>
          <TextShowButton>
            {showPrayer ? 'HIDE ANSWERED PRAYERS' : 'SHOW ANSWERED PRAYERS'}
          </TextShowButton>
        </ShowButton>
      </ShowButtonContainer>
      <View style={{ marginTop: 16 }}>
        {showPrayer ? prayerListChecked : <View></View>}
      </View>
    </ScrollPrayer>
  );
}
export default PrayerList;
