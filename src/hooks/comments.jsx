import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useMemo,
} from 'react';

const CommentsContext = createContext({});

export const CommentsProvider = ({ children }) => {
  const mock = useMemo(() => {
    return [
      {
        id: 1234556,
        name: 'doug',
        content: 'Teste comments',
        createdAt: new Date(),
      },
      {
        id: 1234556,
        name: 'Jões',
        content: 'Teste comments 2',
        createdAt: new Date(),
      },
      {
        id: 1234556,
        name: 'Maria',
        content: 'Teste comments 3',
        createdAt: new Date(),
      },
    ];
  }, []);

  const [data, setData] = useState(mock);

  const postComment = useCallback(
    async (comment) => {
      const newComment = {
        id: 12323,
        name: comment.name,
        content: comment.content,
        createdAt: new Date(),
      };
      setData([...data, newComment]);
    },
    [data]
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
