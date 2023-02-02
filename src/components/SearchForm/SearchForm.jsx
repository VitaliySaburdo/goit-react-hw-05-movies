import { useState } from 'react';
import {Form, SearchFormButton,  SearchFormInput} from './SearchForm.styled'
import PropTypes from 'prop-types';

export const SearchForm = ({onSubmit}) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Please enter youre query');
      //   return toast.warn('Please, enter image name.');
    }
    onSubmit(query);
    resetForm();
  };
  const resetForm = () => {
    setQuery('');
  };

  const handleQueryChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SearchFormButton type="submit">
        <span>Search</span>
      </SearchFormButton>

      <SearchFormInput
        onChange={handleQueryChange}
        value={query}
        type="text"
        placeholder="Search movie"
        autoComplete="off"
        autoFocus
      />
    </Form>
  );
};

SearchForm.prototype = {
 onSubmit: PropTypes.func
}