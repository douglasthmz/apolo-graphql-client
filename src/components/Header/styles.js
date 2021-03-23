import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  height: 90px;
  width: 100%;
  max-width: 800px;
  background-color: #3d6fdf;
  color: #eaeeef;
  text-align: center;

  div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
    padding-left: 50px;
    /* padding-left: 40%; */
  }
`;

export const OnlineSection = styled.section`
  margin-top: 10px;
  display: flex;
  padding-left: 50px;
  align-items: flex-start;
  span {
    margin-right: 4px;
  }
`;

export const OnlineUser = styled.button`
  font-size: 14px;
  padding: 3px 7px;
  border-radius: 8px;
  color: #eaeeef;
  border: none;
  background-color: green;
  cursor: default;
  margin-right: 5px;
`;
