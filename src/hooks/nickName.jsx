import React, { createContext, useCallback, useState, useContext } from 'react';
import { useQuery, useMutation, useSubscription } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_ONLINES = gql`
  query {
    onlines {
      id
      name
      status
      createdAt
    }
  }
`;

const POST_ONLINE = gql`
  mutation saveOnline($name: String!, $status: Boolean!) {
    saveOnline(input: { name: $name, status: $status }) {
      id
      name
      status
      createdAt
    }
  }
`;

const UPDATE_ONLINE = gql`
  mutation updateOnline($id: String!) {
    updateOnline(id: $id) {
      id
      name
      status
      createdAt
    }
  }
`;

const NickNameContext = createContext({});

export const NickNameProvider = ({ children }) => {
  // const { loading, error, data: backData, refetch, subscribeToMore } = useQuery(
  //   GET_ONLINES
  // );

  const [sendOnline] = useMutation(POST_ONLINE);
  const [updateOnline] = useMutation(UPDATE_ONLINE);

  const [data, setData] = useState(() => {
    const nick = localStorage.getItem('@ApolloChat:nick');
    const id = localStorage.getItem('@ApolloChat:id');

    if (nick) {
      return {
        nick,
        id,
      };
    }

    return {};
  });

  const signIn = useCallback(
    async ({ nick }) => {
      const response = await sendOnline({
        variables: {
          name: nick,
          status: true,
        },
      });

      // const { token, user } = response.data;

      localStorage.setItem('@ApolloChat:nick', response.data.saveOnline.name);
      localStorage.setItem('@ApolloChat:id', response.data.saveOnline.id);

      setData({
        nick: response.data.saveOnline.name,
        id: response.data.saveOnline.id,
      });
    },
    [sendOnline]
  );

  const signOut = useCallback(async () => {
    await updateOnline({
      variables: {
        id: data.id,
      },
    });

    localStorage.removeItem('@ApolloChat:nick');
    localStorage.removeItem('@ApolloChat:id');
    setData({});
  }, [data.id, updateOnline]);

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
