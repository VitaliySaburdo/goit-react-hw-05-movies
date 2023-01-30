import { Link } from 'react-router-dom';
import { Container } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  return (
    <div>
      <Container>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`}>
              <img src={movie.poster_path} alt={movie.title} />
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </Container>
    </div>
  );
};
