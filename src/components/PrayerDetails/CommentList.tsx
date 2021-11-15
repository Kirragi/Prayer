import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Swipeout from 'react-native-swipeout';
import { slelectComments } from '../../store/saga/Comments/reducer';
import { deleteCommentAction } from '../../store/saga/Comments/actions';
import { slelectUser } from '../../store/saga/User/reducer';
import {
  CommentContainer,
  ImageComment,
  Name,
  HeadComment,
  CommentDate,
  Comment,
} from '../../styles/components/PrayerDetailsStyle';
import { CommentListProps } from '../../types';
function CommentList(props: CommentListProps) {
  const comments = useSelector(slelectComments(props.prayerId));
  const user = useSelector(slelectUser);
  const dispatch = useDispatch();
  function deletes(id: number) {
    dispatch(deleteCommentAction({ id: id }));
  }
  const commntsList = comments.map((comment) => {
    const swipeoutBtns = [
      {
        text: 'Deleted',
        backgroundColor: '#AC5253',
        onPress: () => {
          deletes(comment.id);
        },
      },
    ];
    return (
      <Swipeout
        key={comment.id}
        style={{
          minHeight: 74,
          maxHeight: 74,
          flex: 1,
          alignItems: 'center',
        }}
        right={swipeoutBtns}>
        <CommentContainer>
          <ImageComment source={require('../../assets/png/eeww.png')} />
          <View>
            <HeadComment>
              <Name>{user.name}</Name>
              <CommentDate>{comment.created.split('T')[0]}</CommentDate>
            </HeadComment>
            <Comment>{comment.body}</Comment>
          </View>
        </CommentContainer>
      </Swipeout>
    );
  });
  return <View>{commntsList}</View>;
}
export default CommentList;
