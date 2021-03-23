import React from 'react';

import { Container, OnlineSection, OnlineUser } from './styles';
import { CustomButton } from '../Footer/styles';
import { useNick } from '../../hooks/nickName';
import { useOnline } from '../../hooks/online';

function Header() {
  const { signOut } = useNick();
  const { onlines } = useOnline();

  return (
    <Container>
      <div>
        <h1>Apollo Chat</h1>
        {console.log(onlines)}
        <CustomButton onClick={() => signOut()}>SAIR</CustomButton>
      </div>
      <OnlineSection>
        <span>Conectados:</span>
        {onlines.map((online) => {
          return <OnlineUser>{online.name}</OnlineUser>;
        })}
      </OnlineSection>
    </Container>
  );
}

export default Header;
