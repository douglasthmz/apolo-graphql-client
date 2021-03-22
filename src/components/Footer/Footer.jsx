import React, { useState, useCallback } from 'react';

import { Container, CustomInput, CustomButton } from './styles';
import { useComments } from '../../hooks/comments';
import { useNick } from '../../hooks/nickName';

function Footer() {
  const [content, setContent] = useState('');
  const { nick } = useNick();
  const { comments, postComment } = useComments();

  const handleChange = useCallback(
    (event) => {
      setContent(event.target.value);
      console.log(event.target.value);
    },
    [setContent]
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (content.length > 1) {
        // signIn({ nick: nickName });
        console.log('submit', content);
        postComment({
          name: nick,
          content,
        });
        setContent('');
      }
    },
    [content, nick, postComment, setContent]
  );

  return (
    <Container>
      <main>
        <form onSubmit={handleSubmit}>
          {console.log('comments', comments)}
          <CustomInput type="text" value={content} onChange={handleChange} />
          <CustomButton type="submit">SEND</CustomButton>
        </form>
      </main>
    </Container>
  );
}

export default Footer;
