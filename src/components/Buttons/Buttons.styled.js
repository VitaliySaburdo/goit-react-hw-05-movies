import styled from 'styled-components';

export const BtnNxt = styled.button`
  display: inline-block;
  width: 120px;
  height: 40px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  background-color: blue;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: none;
  outline: none;
  margin-bottom: 50px;
  margin-top: 30px;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;
export const BtnPrv = styled.button`
  display: inline-block;
  width: 120px;
  height: 40px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  background-color: blue;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: none;
  outline: none;
  margin-bottom: 50px;
  margin-top: 30px;
  margin-right: 20px;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;
