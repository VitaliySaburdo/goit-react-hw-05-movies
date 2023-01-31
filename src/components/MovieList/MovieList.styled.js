import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 228px);
  gap: 16px;
  list-style-type: none;
`;

export const Item = styled.li`
  position: relative;
  transition: 0.5s linear;
  border-radius: 8px;
  cursor: pointer;
`;

export const Img = styled.img`
  display: block;
  width: 280px;
  height: 360px;
  border-radius: 8px;
  margin-bottom: 10px;
`;
export const ProductName = styled.p`
  text-transform: uppercase;
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;

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
