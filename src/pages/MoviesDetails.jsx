import { useParams } from 'react-router-dom';
import { getFilmDetails } from '../ApiService/ApiService';
import { useEffect, useState } from 'react';
import { MovieItem } from 'components/MovieItem/MovieItem';

const MoviesDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    async function APIfetchMovieDetails() {
      try {
        const movieDetails = await getFilmDetails(id);
        setMovieDetails(movieDetails);
      } catch (error) {
        console.log(error);
      }
    }
    APIfetchMovieDetails();
  }, [id]);

  if (!movieDetails) return;

  return <MovieItem movieDetails={movieDetails} />;
};

export default MoviesDetails