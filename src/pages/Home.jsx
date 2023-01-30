import { useEffect,useState } from "react";
import { fetchTrendingMovie } from '../ApiService/ApiService'
import {MovieList} from '../components/MovieList/MovieList'

export const Home = () => {
    const [movies, setmovies] = useState([]);
  // const [page, setPage] = useState(1);

  useEffect(() => {
    async function APIfetchMovies() {
      try {
        const {results} = await fetchTrendingMovie(1);
        console.log(results)
        if (results !== 0) {
          setmovies(prevState => [...prevState, ...results]);
        } 

      } catch (error) {
        console.log(error)
      }
    }
    APIfetchMovies()
  },[])
  return (
    <>
      <h2>Trending today</h2>
      <MovieList movies={movies} />
    </>
    
  );
};