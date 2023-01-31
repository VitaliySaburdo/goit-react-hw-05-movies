import { useParams} from 'react-router-dom';
import { getFilmDetails } from '../ApiService/ApiService';
import { useEffect, useState } from 'react';
import { MovieItem } from 'components/MovieItem/MovieItem';

export const MoviesDetails = () => {
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
  
  const { poster_path, overview, title, release_date, vote_average, genres } =
    movieDetails;
  const year = release_date.slice(0, 4);
  const userScore = vote_average.toFixed(1) * 10;
  const genresList = genres.map(genre => genre.name + ', ');

  return (
    <MovieItem
      year={year}
      userScore={userScore}
      genresList={genresList}
      poster_path={poster_path}
      overview={overview}
      title={title}
    />
  );
};
