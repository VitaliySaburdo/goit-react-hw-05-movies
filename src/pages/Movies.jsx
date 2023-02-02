import { useEffect, useState } from 'react';
import { getFilmSearch } from '../ApiService/ApiService';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { MovieList } from '../components/MovieList/MovieList';
import { Buttons } from 'components/Buttons/Buttons';
import { useSearchParams } from 'react-router-dom';


const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPage] = useState(1);
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
      } catch (error) {
        console.log(error);
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

  return (
    <>
      <SearchForm onSubmit={formSubmitHendler} />
      {movies.length > 0 && <MovieList movies={movies} />}
      {(movies.length  === 0 && movieName) && <h2>Not find movies</h2>}
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
