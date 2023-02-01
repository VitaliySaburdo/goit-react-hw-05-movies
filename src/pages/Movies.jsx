import { useEffect, useState } from 'react';
import { getFilmSearch } from '../ApiService/ApiService';
import { SearchForm } from '../components/SearchForm/SearchForm';
import {MovieList} from '../components/MovieList/MovieList'

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function APIfetchMovies() {
      try {
        const { results } = await getFilmSearch(query);
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    }
    APIfetchMovies();
  }, [query]);

  const formSubmitHendler = query => {
    setQuery(query);
  };
  console.log(query);
  console.log(movies);

  return (
    <>
      <SearchForm onSubmit={formSubmitHendler} />
      <MovieList
        movies={movies}
      />
    </>
  );
};
