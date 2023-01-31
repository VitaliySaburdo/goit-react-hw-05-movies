import { Link } from 'react-router-dom';
import { Container, Img } from './MovieItem.styled';
export const MovieItem = ({
  year,
  userScore,
  genresList,
  poster_path,
  overview,
  title,
}) => {
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
    </main>
  );
};
