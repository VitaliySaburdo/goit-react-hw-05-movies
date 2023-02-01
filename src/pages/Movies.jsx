import { useEffect, useState } from 'react';
import { getFilmSearch } from '../ApiService/ApiService';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { MovieList } from '../components/MovieList/MovieList'
import { Buttons } from 'components/Buttons/Buttons';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPage] = useState(1);
  const [showButtons, setShowButtons] = useState(false)

  
  useEffect(() => {
    if (query === '') {
      return;
    }
  if (movies.length !== 0) {
      setShowButtons(true)
    }
    async function APIfetchMovies() {
      try {
        const {total_pages, results} = await getFilmSearch(query, page);
        setTotalPage(total_pages);
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    }
    APIfetchMovies();
  }, [query, page, movies]);

  const formSubmitHendler = query => {
    setQuery(query);
    setPage(1);
  };
    const onNextPage = () => {
    setPage(prevState => prevState + 1);
  };
  const onPreviousPage = () => {
    setPage(prevState => prevState - 1);
  };

  return (
    <>
      <SearchForm onSubmit={formSubmitHendler} />
      <MovieList
        movies={movies}
      />
       {showButtons && <Buttons previousPage={onPreviousPage}
        nextPage={onNextPage}
        page={page}
        totalPages={totalPages}/>}

    </>
  );
};
