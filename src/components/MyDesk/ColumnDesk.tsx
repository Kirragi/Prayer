import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { useSelector } from 'react-redux';
import { MyDeskScreenProp } from '../../types';
import { State } from '../../types';
import {
  Column,
  ColumnContainer,
  ColumnText,
} from '../../styles/components/MeDeskStyle';

function ColumnDesk() {
  const navigations = useNavigation<MyDeskScreenProp>();
  const cards = useSelector((state: State) => state.Column);
  const elementsCard = cards.map((itemCards) => {
    const title = itemCards.title;
    return (
      <Column
        key={title}
        onPress={() => navigations.navigate('Prayer', { columnId: title })}>
        <ColumnText>{title}</ColumnText>
      </Column>
    );
  });
  return <ColumnContainer>{elementsCard}</ColumnContainer>;
}
export default ColumnDesk;
