import { Link } from 'react-router-dom';
import noPoster from '../../images/No_image_poster.png'

import { Container, Img, ProductName } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  return (
    <Container>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <Img
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : noPoster}
              alt={movie.title}
              width="395"
              height="574"
            />
            <ProductName>{movie.title}</ProductName>
          </Link>
        </li>
      ))}
    </Container>
  );
};
