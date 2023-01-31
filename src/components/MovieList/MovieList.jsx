import { Link } from 'react-router-dom';
import {
  Container,
  Img,
  ProductName,
  BtnNxt,
  BtnPrv,
} from './MovieList.styled';

export const MovieList = ({
  movies,
  nextPage,
  previousPage,
  page,
  totalPages,
}) => {
  return (
    <div>
      <Container>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <Img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width="395"
                height="574"
              />
              <ProductName>{movie.title}</ProductName>
            </Link>
          </li>
        ))}
      </Container>

      <BtnPrv
        disabled={page === 1}
        onClick={() => previousPage()}
        type="button"
      >
        Previous page
      </BtnPrv>

      <BtnNxt
        disabled={page === totalPages}
        onClick={() => nextPage()}
        type="button"
      >
        Next page
      </BtnNxt>
    </div>
  );
};
