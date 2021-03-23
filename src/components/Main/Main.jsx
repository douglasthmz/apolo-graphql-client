import React, { useRef, useEffect, useCallback } from 'react';

import { Container, CommentCard, CommentName, CommentContent } from './styles';
import { useComments } from '../../hooks/comments';
import { useNick } from '../../hooks/nickName';

function Main() {
  const { comments } = useComments();
  const { nick } = useNick();

  return (
    <Container>
      {comments.map((comment) => {
        return (
          <CommentCard key={comment.id}>
            <CommentName selfUser={nick === comment.name}>
              {comment.name}:
            </CommentName>
            <CommentContent>{comment.content}</CommentContent>
          </CommentCard>
        );
      })}
    </Container>
  );
}

export default Main;
