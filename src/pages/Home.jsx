import { useEffect, useState } from 'react';
import { fetchTrendingMovie } from '../ApiService/ApiService';
import { MovieList } from '../components/MovieList/MovieList';

export const Home = () => {
  const [movies, setmovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPage] = useState(1);

  useEffect(() => {
    async function APIfetchMovies() {
      try {
        const { results, total_pages } = await fetchTrendingMovie(page);
    setTotalPage(total_pages);
        if (results !== 0) {
          setmovies([...results]);
        }
      } catch (error) {
        console.log(error);
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
      <MovieList
        movies={movies}
        previousPage={onPreviousPage}
        nextPage={onNextPage}
        page={page}
        totalPages={totalPages}
      />
    </>
  );
};