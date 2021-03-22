import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  height: 30vh;
  background-color: #eaeeef;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 30px;
  margin-top: 15vh;
`;

export const CustomInput = styled.input`
  line-height: 30px;
  border: none;
  margin-top: 10px;
  border-radius: 5px;
  color: #6c6c6c;
`;
export const CustomLabel = styled.h2``;

export const ErrorLabel = styled.h4`
  color: red;
  font-size: 16px;
`;
