import { useEffect, useState } from 'react';
import { getFilmSearch } from '../ApiService/ApiService';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { MovieList } from '../components/MovieList/MovieList';
import { Buttons } from 'components/Buttons/Buttons';
import { useSearchParams } from 'react-router-dom';
import {Loader} from '../components/Loader/Loder'


const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false)  


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
        setIsLoading(true)
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false)
      }
    }
    APIfetchMovies();
  }, [movieName, page, movies]);

  const formSubmitHendler = query => {
    setSearchParams({ query });
  };
  const onNextPage = () => {
    setPage(prevState => prevState + 1);
  };
  const onPreviousPage = () => {
    setPage(prevState => prevState - 1);
  };
console.log(movies.length)
  return (
    <>
      <SearchForm onSubmit={formSubmitHendler} />
      {isLoading && <Loader/>}
      {movies.length > 0 && <MovieList movies={movies} />}
      {(movieName) && <h3>Not find movies</h3>}
      {totalPages > 1 && (
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

export default Movies;
