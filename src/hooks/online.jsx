import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
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

const ONLINE_SUBSCRIPTION = gql`
  subscription createdOnline {
    createdOnline {
      id
      name
      status
      createdAt
    }
  }
`;

const OFFLINE_SUBSCRIPTION = gql`
  subscription createdOnline {
    updatedOnline {
      id
      name
      status
      createdAt
    }
  }
`;

const OnlineContext = createContext({});

export const OnlineProvider = ({ children }) => {
  const { loading, error, data: backData, refetch, subscribeToMore } = useQuery(
    GET_ONLINES
  );

  const [data, setData] = useState([]);
  useEffect(() => {
    if (!loading) {
      setData(backData.onlines);
    }
  }, [backData, loading]);

  useEffect(() => {
    subscribeToMore({
      document: ONLINE_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        return setData([...data, subscriptionData.data.createdOnline]);
      },
    });

    subscribeToMore({
      document: OFFLINE_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const offlineId = subscriptionData.data.updatedOnline.id;
        const newData = data.filter((elem) => elem.id !== offlineId);
        return setData(newData);
      },
    });
  }, [data, subscribeToMore, refetch]);

  return (
    <OnlineContext.Provider value={{ onlines: data }}>
      {children}
    </OnlineContext.Provider>
  );
};

export function useOnline() {
  const context = useContext(OnlineContext);

  if (!context) {
    throw new Error('useNick must be used within a OnlineProvider');
  }

  return context;
}
