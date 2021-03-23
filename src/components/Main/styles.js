import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding-top: 8vh;
  padding-bottom: 9vh;
  padding-left: 20px;
  height: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  /* overflow-y: scroll; */
`;
export const CommentCard = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 10px auto;
  background-color: #fff;
  height: 40px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 10px;
  border-radius: 5px;
  padding: 3px;
`;

export const CommentName = styled.span`
  margin-right: 15px;
  ${(props) =>
    props.selfUser &&
    css`
      color: #ff960d;
    `}
`;

export const CommentContent = styled.h3``;
