import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { slelectPrayer } from '../../store/saga/Prayer/reducer';
import {
  ShowButtonContainer,
  TextShowButton,
  ScrollPrayer,
  ShowButton,
} from '../../styles/components/PrayerStyle';
import { PrayerListProps } from '../../types';
import Prayer from './Prayer';
function PrayerList(props: PrayerListProps) {
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
      {prayerList}
      <ShowButtonContainer>
        <ShowButton onPress={() => stateShowPrayer(!showPrayer)}>
          <TextShowButton>
            {showPrayer ? 'HIDE ANSWERED PRAYERS' : 'SHOW ANSWERED PRAYERS'}
          </TextShowButton>
        </ShowButton>
      </ShowButtonContainer>
      {showPrayer ? prayerListChecked : <></>}
    </ScrollPrayer>
  );
}
export default PrayerList;
