import { Buttons } from 'components/Buttons/Buttons';
import { useEffect, useState } from 'react';
import { fetchTrendingMovie } from '../ApiService/ApiService';
import { MovieList } from '../components/MovieList/MovieList';
import { Loader } from '../components/Loader/Loder';

const Home = () => {
  const [movies, setmovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function APIfetchMovies() {
      setIsLoading(true);
      try {
        const { results, total_pages } = await fetchTrendingMovie(page);
        setTotalPage(total_pages);

        if (results !== 0) {
          setmovies(results);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    APIfetchMovies();
  }, [page, totalPages]);

  const onNextPage = () => {
    setPage(prevState => prevState + 1);
  };
  const onPreviousPage = () => {
    setPage(prevState => prevState - 1);
  };

  return (
    <>
      <h2>Trending today</h2>
      {isLoading && <Loader />}
      {movies.length  > 0 &&<MovieList movies={movies} />}
      {!totalPages && (
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

export default Home;
