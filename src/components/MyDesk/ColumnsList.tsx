import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { useSelector, useDispatch } from 'react-redux';
import { MyDeskScreenProp } from '../../types/navigationsType';
import { slelectColumns } from '../../store/saga/Columns/reducer';
import Swipeout from 'react-native-swipeout';
import { deleteColumnAction } from '../../store/saga/Columns/actions';
import {
  Column,
  ColumnContainer,
  ColumnContent,
  ContentContainer,
  ColumnText,
  swipeout,
} from '../../styles/components/MeDeskStyle';
function ColumnsList() {
  const navigations = useNavigation<MyDeskScreenProp>();
  const columns = useSelector(slelectColumns);
  const dispatch = useDispatch();
  const columnsList = columns.map((column) => {
    const swipeoutBtns = [
      {
        text: 'Update',
        backgroundColor: '#72A8BC',
        onPress: () => {
          navigations.navigate('UpdateColumn', {
            columnId: column.id,
            title: column.title,
          });
        },
      },
      {
        text: 'Deleted',
        backgroundColor: '#AC5253',
        onPress: () => {
          dispatch(deleteColumnAction({ id: column.id }));
        },
      },
    ];
    return (
      <Column key={column.id}>
        <Swipeout style={swipeout.container} right={swipeoutBtns}>
          <ColumnContent
            onPress={() =>
              navigations.navigate('Prayer', {
                columnId: column.id,
                title: column.title,
              })
            }>
            <ColumnText>{column.title}</ColumnText>
          </ColumnContent>
        </Swipeout>
      </Column>
    );
  });
  return (
    <ContentContainer>
      <ColumnContainer>{columnsList}</ColumnContainer>
    </ContentContainer>
  );
}
export default ColumnsList;
