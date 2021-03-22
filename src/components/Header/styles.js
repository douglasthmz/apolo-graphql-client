import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  height: 60px;
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
    padding-left: 40%;
  }
`;
