import React from 'react';

import { NickNameProvider } from './nickName';
import { CommentsProvider } from './comments';
import { OnlineProvider } from './online';

const AppProvider = ({ children }) => (
  <NickNameProvider>
    <OnlineProvider>
      <CommentsProvider>{children}</CommentsProvider>
    </OnlineProvider>
  </NickNameProvider>
);

export default AppProvider;
