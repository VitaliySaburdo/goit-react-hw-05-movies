import styled from 'styled-components';

export const Container = styled.ul`
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
