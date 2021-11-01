import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { slelectComments } from '../../store/reducer';
import {
  CommentContainer,
  ImageComment,
  Name,
  HeadComment,
  CommentDate,
  Comment,
} from '../../styles/components/PrayerDetailsStyle';
function CommentList() {
  const comment = useSelector(slelectComments);
  const list = comment.map((comments) => {
    return (
      <CommentContainer key={comments.id}>
        <ImageComment source={require('../../assets/png/eeww.png')} />
        <View>
          <HeadComment>
            <Name>{comments.author}</Name>
            <CommentDate>2 days ago</CommentDate>
          </HeadComment>
          <Comment>{comments.body}</Comment>
        </View>
      </CommentContainer>
    );
  });
  return <View>{list}</View>;
}
export default CommentList;
