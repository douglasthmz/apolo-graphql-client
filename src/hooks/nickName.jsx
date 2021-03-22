import React, { createContext, useCallback, useState, useContext } from 'react';

const NickNameContext = createContext({});

export const NickNameProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const nick = localStorage.getItem('@ApolloChat:nick');

    if (nick) {
      return {
        nick,
      };
    }

    return {};
  });

  const signIn = useCallback(async ({ nick }) => {
    // const response = await api.post('sessions', {
    //   email,
    //   password,
    // });

    // const { token, user } = response.data;

    localStorage.setItem('@ApolloChat:nick', nick);

    setData({ nick });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@ApolloChat:nick');
    setData({});
  }, []);

  return (
    <NickNameContext.Provider value={{ nick: data.nick, signIn, signOut }}>
      {children}
    </NickNameContext.Provider>
  );
};

export function useNick() {
  const context = useContext(NickNameContext);

  if (!context) {
    throw new Error('useNick must be used within a NickNameProvider');
  }

  return context;
}
