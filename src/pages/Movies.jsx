import { useEffect, useState } from 'react';
import { getFilmSearch } from '../ApiService/ApiService';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { MovieList } from '../components/MovieList/MovieList';
import { Buttons } from 'components/Buttons/Buttons';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPage] = useState(1);
  const [showButtons, setShowButtons] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    async function APIfetchMovies() {
      if (movieName === '') {
        return;
      }
      try {
        const { total_pages, results } = await getFilmSearch(movieName, page);
        setTotalPage(total_pages);
        setMovies(results);
        if (movies.length !== 0) {
          setShowButtons(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
    APIfetchMovies();
  }, [movieName, page, movies]);

   const updateQueryString = (query) => {
    const nextParams = query !== "" ? { query } : {};
    setSearchParams(nextParams);
  };
  const onNextPage = () => {
    setPage(prevState => prevState + 1);
  };
  const onPreviousPage = () => {
    setPage(prevState => prevState - 1);
  };

  return (
    <>
      <SearchForm onChange={updateQueryString} />
      <MovieList movies={movies} />
      {showButtons && (
        <Buttons
          previousPage={onPreviousPage}
          nextPage={onNextPage}
          page={page}
          totalPages={totalPages}
        />
      )}
    </>
  );
};
