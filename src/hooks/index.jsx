import React from 'react';

import { NickNameProvider } from './nickName';
import { CommentsProvider } from './comments';

const AppProvider = ({ children }) => (
  <NickNameProvider>
    <CommentsProvider>{children}</CommentsProvider>
  </NickNameProvider>
);

export default AppProvider;
