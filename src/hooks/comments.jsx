import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import { useQuery, useMutation, useSubscription } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_COMMENTS = gql`
  query {
    comments {
      id
      name
      content
      createdAt
    }
  }
`;

const POST_COMMENT = gql`
  mutation saveComment($name: String!, $content: String!) {
    saveComment(input: { name: $name, content: $content }) {
      id
      name
      content
      createdAt
    }
  }
`;

const COMMENTS_SUBSCRIPTION = gql`
  subscription feedComments {
    feedComments {
      id
      name
      content
      createdAt
    }
  }
`;

const CommentsContext = createContext({});

export const CommentsProvider = ({ children }) => {
  const { loading, error, data: backData, refetch, subscribeToMore } = useQuery(
    GET_COMMENTS
  );
  const [sendComment] = useMutation(POST_COMMENT);
  // const { data: subData, loading: subLoading } = useSubscription(
  //   COMMENTS_SUBSCRIPTION
  // );

  const [data, setData] = useState([]);

  useEffect(() => {
    if (!loading) {
      setData(backData.comments);
    }
  }, [backData, loading, setData]);

  useEffect(() => {
    subscribeToMore({
      document: COMMENTS_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        return setData([...data, subscriptionData.data.feedComments]);
      },
    });
  }, [data, subscribeToMore]);

  const postComment = useCallback(
    async (comment) => {
      await sendComment({
        variables: {
          name: comment.name,
          content: comment.content,
        },
      });
      refetch();
    },
    [sendComment, refetch]
  );

  return (
    <CommentsContext.Provider value={{ comments: data, postComment }}>
      {children}
    </CommentsContext.Provider>
  );
};

export function useComments() {
  const context = useContext(CommentsContext);

  if (!context) {
    throw new Error('useNick must be used within a CommentProvider');
  }

  return context;
}
