import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, SearchFormButton, SearchFormInput } from './SearchForm.styled';
import PropTypes from 'prop-types';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast('Please enter youre query');
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
    <>
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
      <div>
        <ToastContainer position="top-left" />
      </div>
    </>
  );
};

SearchForm.prototype = {
  onSubmit: PropTypes.func,
};
