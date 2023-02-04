import { Link, Outlet, useLocation } from 'react-router-dom';
import { Container, Img, Box } from './MovieItem.styled';
import { Loader } from '../Loader/Loder';
import { Suspense, useRef } from 'react';
import noPoster from '../../images/No_image_poster.png';
import PropTypes from 'prop-types';

export const MovieItem = ({ movieDetails }) => {
  const { poster_path, overview, title, release_date, vote_average, genres } =
    movieDetails;

  const year = release_date.slice(0, 4);
  const userScore = vote_average.toFixed(1) * 10;
  const genresList = genres.map(genre => genre.name + ', ');
  const location = useLocation();
  const locRef = useRef(location.state?.from ?? '/movies')

  return (
    <main>
      <Link to={locRef.current}>Go Back</Link>
      <Container>
        <Img
          src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : noPoster}
          alt=""
          width={300}
        />
        <div>
          <h2>
            {title} ({year})
          </h2>
          <p>User Score: {`${userScore}%`}</p>
          <h3>Overwiew</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genresList}</p>
        </div>
      </Container>
      <Box>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </Box>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

MovieItem.prototype = {
  movieDetails: PropTypes.objectOf(
    PropTypes.shape({
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.string,
    genres: PropTypes.object,
  }),
  )
};
