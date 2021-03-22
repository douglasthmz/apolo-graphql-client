import React from 'react';

import { Container } from './styles';
import { CustomButton } from '../Footer/styles';
import { useNick } from '../../hooks/nickName';

function Header() {
  const { signOut } = useNick();

  return (
    <Container>
      <div>
        <h1>Apollo Chat</h1>
        <CustomButton onClick={() => signOut()}>SAIR</CustomButton>
      </div>
    </Container>
  );
}

export default Header;
