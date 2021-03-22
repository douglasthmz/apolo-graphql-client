import React, { useCallback, useState } from 'react';

import { Container, CustomInput, CustomLabel, ErrorLabel } from './styles';
import { useNick } from '../../hooks/nickName';

function NickBox() {
  const [nickName, setNickName] = useState('');
  const [error, setError] = useState('');
  const { signIn } = useNick();

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (nickName.length > 2) {
        signIn({ nick: nickName });
        setError('');
      } else {
        setError('Preencha o nickname.');
      }
    },
    [nickName, signIn]
  );

  const handleChange = useCallback(
    (event) => {
      setNickName(event.target.value);
      console.log(event.target.value);
    },
    [setNickName]
  );

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <CustomLabel>Digite seu Nickname:</CustomLabel>
        {error.length > 1 ? <ErrorLabel>{error}</ErrorLabel> : null}
        <CustomInput type="text" value={nickName} onChange={handleChange} />
      </form>
    </Container>
  );
}

export default NickBox;
