import { Link, Outlet } from 'react-router-dom';
import { Container, Img, Box } from './MovieItem.styled';


export const MovieItem = ({ movieDetails }) => {
  const { poster_path, overview, title, release_date, vote_average, genres } =
    movieDetails;
  const year = release_date.slice(0, 4);
  const userScore = vote_average.toFixed(1) * 10;
  const genresList = genres.map(genre => genre.name + ', ');
  return (
    <main>
      <Link to="/">Go Back</Link>
      <Container>
        <Img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
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
          <Link to="cast" >Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </Box>
      <Outlet />
    </main>
  );
};
