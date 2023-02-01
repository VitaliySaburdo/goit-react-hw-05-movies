import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid orangered;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 100px;
  height: 40px;
  font-size: 14px;
  border: 0;
  background-color: orangered;
  color: white;
  background-image: url('../../images/search-icon.svg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const SearchFormButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 14px;
  border: none;
  outline: none;
  padding: 10px;
`;
