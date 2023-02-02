import { useEffect, useState } from 'react';
import { getFilmSearch } from '../ApiService/ApiService';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { MovieList } from '../components/MovieList/MovieList';
import { Buttons } from 'components/Buttons/Buttons';
import { useSearchParams } from 'react-router-dom';
import { Loader } from '../components/Loader/Loder';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        if (results.length !== 0) {
          setTotalPage(total_pages);
        setMovies(results);
        setIsLoading(true);
        } else {
          toast.warn(`Movies ${movieName} is not found`);
        }
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

  return (
    <>
      <SearchForm onSubmit={formSubmitHendler} />
      {isLoading && <Loader />}
      <ToastContainer position="top-center" />
      <MovieList movies={movies} />
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
