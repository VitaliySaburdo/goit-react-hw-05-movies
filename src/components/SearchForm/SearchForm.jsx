import React from 'react';
import { Input, Icon, Wrapper } from './SearchForm.styled';

export const SearchForm = ({ value, onChange }) => {
  return (
    <>
      <Wrapper>
        <Icon />
        <Input
          onChange={e => onChange(e.target.value.toLowerCase())}
          value={value}
          type="text"
          placeholder="Search movie"
          autoComplete="off"
          autoFocus
        />
      </Wrapper>
    </>
  );
};
