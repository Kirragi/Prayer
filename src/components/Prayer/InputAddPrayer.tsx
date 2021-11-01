import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../types';
import PlusSvg from '../../assets/svg/Plus';
import {
  FormPrayer,
  InputPrayer,
  FormContainer,
} from '../../styles/components/PrayerStyle';
function InputAddPrayer() {
  let active = useSelector((state: State) => state.PrayerMenu);
  let input: JSX.Element;
  if (active) {
    input = <></>;
  } else {
    input = (
      <FormContainer>
        <FormPrayer>
          <PlusSvg fill={'#72A8BC'} size={30} />
          <InputPrayer placeholder="Add a prayer..." />
        </FormPrayer>
      </FormContainer>
    );
  }
  return input;
}
export default InputAddPrayer;
