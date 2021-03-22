import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  height: 50px;
  width: 100%;
  max-width: 800px;
  background-color: #cccccc;
  text-align: center;
  padding: 0 10px;
  border-radius: 5px;

  main {
    form {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const CustomInput = styled.input`
  line-height: 30px;
  border: none;
  width: 100%;
  margin-top: 10px;
  border-radius: 5px;
  color: #6c6c6c;
`;

export const CustomButton = styled.button`
  width: 70px;
  height: 30px;
  margin-top: 10px;
  border-radius: 15px;
  margin-left: 10px;
  box-shadow: none;
  border: none;
  background-color: #ff960d;
  color: #fff;
`;
