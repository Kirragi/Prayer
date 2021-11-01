import React from 'react';
import ColumnDesk from '../components/MyDesk/ColumnDesk';
import {
  MainContainer,
  HeaderContainer,
  PlusContainer,
  TextContainer,
  TextHeader,
} from '../styles/components/MeDeskStyle';
import PlusSvg from '../assets/svg/Plus';
function MyDesk() {
  return (
    <MainContainer>
      <HeaderContainer>
        <TextContainer>
          <TextHeader>My Desk</TextHeader>
        </TextContainer>
        <PlusContainer>
          <PlusSvg fill={'#72A8BC'} size={30} />
        </PlusContainer>
      </HeaderContainer>
      <ColumnDesk />
    </MainContainer>
  );
}
export default MyDesk;
